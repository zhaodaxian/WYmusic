import axios from 'axios'
const BASE_URL = '/api';
// import {Message, Loading} from 'element-ui'
import { message } from 'ant-design-vue';
let LOADING: any = null
let LOADINGCOUNT = 0
function handleResponse(response) {
  if (response.status === 200) {
    return response.data
  }
}
// 全局请求处理
function handleResponseError (Error) {
  const { response } = Error
  if (response) {
    message.error('请求错误处理');
  }else{
    message.error('断网处理');
  }
  return Promise.reject(Error)
}
function createBaseInstance () {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 100000,
    headers: {
      get: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      },
      post: {
        "Content-Type": "application/json;charset=utf-8"
      }
    }
  });
  instance.interceptors.response.use(
    handleResponse,
    handleResponseError,
  )
  return instance
}
// 全局请求处理
function minLoading (interceptors) {
  interceptors.request.use(requsetLoadingInterceptor)
  interceptors.response.use(
    responseSuccess,
    responseError)

  function requsetLoadingInterceptor (config) {
    if (!LOADING) {
      LOADINGCOUNT++
      LOADING = message.loading('Action in progress..', 0);
    }
    return config
  }
  function handleResponseLoading () {
    LOADINGCOUNT--
    if (LOADINGCOUNT === 0) {
      LOADING()
      LOADING = null
    }
  }
  function responseSuccess (SuccessData) {
    handleResponseLoading()
    return SuccessData
  }
  function responseError (Error) {
    handleResponseLoading()
    throw Error
  }
}
export const request = createBaseInstance()
export const globalRequest = createBaseInstance()
minLoading(globalRequest.interceptors)