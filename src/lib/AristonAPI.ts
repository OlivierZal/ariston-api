import { DateTime, Duration } from 'luxon'
import type {
  GetData,
  GetDataWithSettings,
  GetSettings,
  LoginCredentials,
  LoginData,
  LoginPostData,
  Plant,
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

const DOMAIN = 'https://www.ariston-net.remotethermo.com'
const LOGIN_URL = '/R2/Account/Login'

export default class {
  #retry = true

  #retryTimeout!: NodeJS.Timeout

  readonly #api: AxiosInstance

  readonly #logger: Logger

  readonly #settingManager: SettingManager

  public constructor(settingManager: SettingManager, logger: Logger = console) {
    this.#settingManager = settingManager
    this.#logger = logger
    wrapper(axios)
    this.#api = axios.create({
      baseURL: DOMAIN,
      jar: new CookieJar(),
      withCredentials: true,
    })
    this.#setupAxiosInterceptors()
  }

  public async applyLogin(data?: LoginCredentials): Promise<boolean> {
    const { username, password } = data ?? {
      password: this.#settingManager.get('password') ?? '',
      username: this.#settingManager.get('username') ?? '',
    }
    if (username && password) {
      try {
        return (
          await this.login({ email: username, password, rememberMe: true })
        ).data.ok
      } catch (error) {
        if (typeof data !== 'undefined') {
          throw error
        }
      }
    }
    return false
  }

  public async getDataWithSettings(
    id: string,
  ): Promise<{ data: GetDataWithSettings }> {
    return this.#api.get<GetDataWithSettings>(
      `/R2/PlantHomeSlp/GetData/${id}`,
      { params: { fetchSettings: 'true', fetchTimeProg: 'false' } },
    )
  }

  public async login(postData: LoginPostData): Promise<{ data: LoginData }> {
    const response = await this.#api.post<LoginData>(LOGIN_URL, postData)
    if (response.data.ok) {
      this.#settingManager.set('username', postData.email)
      this.#settingManager.set('password', postData.password)
    }
    return response
  }

  public async plantMetering(id: string): Promise<{ data: ReportData }> {
    return this.#api.post<ReportData>(`/R2/PlantMetering/GetData/${id}`)
  }

  public async plantSettings(
    id: string,
    settings: PostSettings,
  ): Promise<{ data: GetSettings }> {
    return this.#api.post<GetSettings>(
      `/api/v2/velis/slpPlantData/${id}/PlantSettings`,
      settings,
    )
  }

  public async plants(): Promise<{ data: Plant[] }> {
    return this.#api.get<Plant[]>('/api/v2/velis/plants')
  }

  public async setData(
    id: string,
    postData: PostData,
  ): Promise<{ data: GetData }> {
    return this.#api.post<GetData>(`/R2/PlantHomeSlp/SetData/${id}`, postData)
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
      const expires = this.#settingManager.get('expires') ?? ''
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
      // @ts-expect-error: `axios` is partially typed
      !(response.headers.hasContentType('application/json') as boolean) &&
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
          const expiresDate = new Date(String(aspNetCookie.expires))
          this.#settingManager.set('expires', expiresDate.toISOString())
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
