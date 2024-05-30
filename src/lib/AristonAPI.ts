import { DateTime, Duration } from 'luxon'
import type {
  GetData,
  GetSettings,
  LoginCredentials,
  LoginData,
  LoginPostData,
  Plant,
  PlantHeader,
  PlantSettings,
  PostData,
  PostSettings,
  ReportData,
} from '..'
import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import APICallRequestData from './APICallRequestData'
import APICallResponseData from './APICallResponseData'
import { CookieJar } from 'tough-cookie'
import createAPICallErrorData from './createAPICallErrorData'
import { wrapper } from 'axios-cookiejar-support'

export interface APISettings {
  readonly expires?: string | null
  readonly password?: string | null
  readonly username?: string | null
}

export interface Logger {
  readonly error: Console['error']
  readonly log: Console['log']
}

export interface SettingManager {
  get: <K extends keyof APISettings>(
    key: K,
  ) => APISettings[K] | null | undefined
  set: <K extends keyof APISettings>(key: K, value: APISettings[K]) => void
}

const ACCEPT_LANGUAGE = 'Accept-Language'
const DOMAIN = 'https://www.ariston-net.remotethermo.com'
const LOGIN_URL = '/R2/Account/Login'

export default class {
  readonly #settingManager?: SettingManager

  #expires = ''

  #password = ''

  #retry = true

  #retryTimeout!: NodeJS.Timeout

  #username = ''

  readonly #api: AxiosInstance

  readonly #logger: Logger

  public constructor(
    config: {
      language?: string
      logger?: Logger
      settingManager?: SettingManager
    } = {},
  ) {
    const { language = 'en', logger = console, settingManager } = config
    this.#logger = logger
    this.#settingManager = settingManager
    wrapper(axios)
    this.#api = axios.create({
      baseURL: DOMAIN,
      headers: { [ACCEPT_LANGUAGE]: language },
      jar: new CookieJar(),
      withCredentials: true,
    })
    this.#setupAxiosInterceptors()
  }

  private get expires(): string {
    return this.#settingManager?.get('expires') ?? this.#expires
  }

  private set expires(value: string) {
    this.#expires = value
    this.#settingManager?.set('expires', this.#expires)
  }

  private get password(): string {
    return this.#settingManager?.get('password') ?? this.#password
  }

  private set password(value: string) {
    this.#password = value
    this.#settingManager?.set('password', this.#password)
  }

  private get username(): string {
    return this.#settingManager?.get('username') ?? this.#username
  }

  private set username(value: string) {
    this.#username = value
    this.#settingManager?.set('username', this.#username)
  }

  public async applyLogin(data?: LoginCredentials): Promise<boolean> {
    const { username = this.username, password = this.password } = data ?? {}
    if (username && password) {
      try {
        const { message, ok: isOk } = (
          await this.login({ email: username, password, rememberMe: true })
        ).data
        if (!isOk) {
          throw new Error(message)
        }
        return true
      } catch (error) {
        if (typeof data !== 'undefined') {
          throw error
        }
      }
    }
    return false
  }

  public async errors(id: string): Promise<{ data: PlantHeader }> {
    return this.#api.get<PlantHeader>(`/R2/Plant/PlantHeader/${id}`)
  }

  public async get(id: string): Promise<{
    data: GetData<PlantSettings>
  }> {
    return this.#api.get<GetData<PlantSettings>>(
      `/R2/PlantHomeSlp/GetData/${id}`,
      { params: { fetchSettings: 'true', fetchTimeProg: 'false' } },
    )
  }

  public async list(): Promise<{ data: Plant[] }> {
    return this.#api.get<Plant[]>('/api/v2/velis/plants')
  }

  public async login({
    email,
    password,
    ...rest
  }: LoginPostData): Promise<{ data: LoginData }> {
    const response = await this.#api.post<LoginData>(LOGIN_URL, {
      email,
      password,
      ...rest,
    })
    if (response.data.ok) {
      this.username = email
      this.password = password
    }
    return response
  }

  public async report(id: string): Promise<{ data: ReportData }> {
    return this.#api.post<ReportData>(`/R2/PlantMetering/GetData/${id}`)
  }

  public async setData(
    id: string,
    postData: PostData,
  ): Promise<{ data: GetData<null> }> {
    return this.#api.post<GetData<null>>(
      `/R2/PlantHomeSlp/SetData/${id}`,
      postData,
    )
  }

  public async setSettings(
    id: string,
    settings: PostSettings,
  ): Promise<{ data: GetSettings }> {
    return this.#api.post<GetSettings>(
      `/api/v2/velis/slpPlantData/${id}/PlantSettings`,
      settings,
    )
  }

  async #handleError(error: AxiosError): Promise<AxiosError> {
    const errorData = createAPICallErrorData(error)
    this.#logger.error(String(errorData))
    if (
      error.response?.status === axios.HttpStatusCode.MethodNotAllowed &&
      this.#retry &&
      error.config?.url !== LOGIN_URL
    ) {
      this.#handleRetry()
      if ((await this.applyLogin()) && error.config) {
        return this.#api.request(error.config)
      }
    }
    throw new Error(errorData.errorMessage)
  }

  async #handleRequest(
    config: InternalAxiosRequestConfig,
  ): Promise<InternalAxiosRequestConfig> {
    if (config.url !== LOGIN_URL) {
      const { expires } = this
      if (expires && DateTime.fromISO(expires) < DateTime.now()) {
        await this.applyLogin()
      }
    }
    this.#logger.log(String(new APICallRequestData(config)))
    return config
  }

  async #handleResponse(response: AxiosResponse): Promise<AxiosResponse> {
    this.#logger.log(String(new APICallResponseData(response)))
    if (
      !(response.headers.hasContentType as (value: unknown) => boolean)(
        'application/json',
      ) &&
      this.#retry &&
      response.config.url !== LOGIN_URL
    ) {
      this.#handleRetry()
      if (await this.applyLogin()) {
        return this.#api.request(response.config)
      }
    }
    this.#setCookieExpiration(response.config.jar)
    return response
  }

  #handleRetry(): void {
    this.#retry = false
    clearTimeout(this.#retryTimeout)
    this.#retryTimeout = setTimeout(
      () => {
        this.#retry = true
      },
      Duration.fromObject({ minutes: 1 }).as('milliseconds'),
    )
  }

  #setCookieExpiration(jar?: CookieJar): void {
    if (jar) {
      jar.getCookies(DOMAIN, (error, cookies) => {
        if (error) {
          this.#logger.error(error.message)
          return
        }
        const aspNetCookie = cookies.find(
          (cookie) => cookie.key === '.AspNet.ApplicationCookie',
        )
        if (aspNetCookie) {
          this.expires = new Date(String(aspNetCookie.expires)).toISOString()
        }
      })
    }
  }

  #setupAxiosInterceptors(): void {
    this.#api.interceptors.request.use(
      async (
        config: InternalAxiosRequestConfig,
      ): Promise<InternalAxiosRequestConfig> => this.#handleRequest(config),
      async (error: AxiosError): Promise<AxiosError> =>
        this.#handleError(error),
    )
    this.#api.interceptors.response.use(
      async (response: AxiosResponse): Promise<AxiosResponse> =>
        this.#handleResponse(response),
      async (error: AxiosError): Promise<AxiosError> =>
        this.#handleError(error),
    )
  }
}
