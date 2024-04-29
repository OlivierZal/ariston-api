import 'source-map-support/register'
import {
  type BaseData,
  type BasePostSettings,
  type BasePostSettingsWithOld,
  type GetData,
  type GetSettings,
  type HistogramData,
  type LoginCredentials,
  type LoginData,
  type LoginPostData,
  Mode,
  OperationMode,
  type Plant,
  type PostData,
  type PostPlantData,
  type PostSettings,
  type ReportData,
  Switch,
  type ViewModel,
  WheType,
} from './types'
import APICallContextData from './lib/APICallContextData'
import APICallRequestData from './lib/APICallRequestData'
import APICallResponseData from './lib/APICallResponseData'
import AristonAPI from './lib/AristonAPI'
import createAPICallErrorData from './lib/APICallErrorData'

export {
  AristonAPI as default,
  APICallContextData,
  APICallRequestData,
  APICallResponseData,
  createAPICallErrorData,
  WheType,
  Mode,
  OperationMode,
  Switch,
  type LoginCredentials,
  type LoginPostData,
  type LoginData,
  type Plant,
  type BaseData,
  type PostPlantData,
  type ViewModel,
  type PostData,
  type GetData,
  type BasePostSettings,
  type BasePostSettingsWithOld,
  type PostSettings,
  type GetSettings,
  type HistogramData,
  type ReportData,
}
