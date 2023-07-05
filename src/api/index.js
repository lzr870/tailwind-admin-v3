import axios from 'axios'
import router from '../router'
import qs from 'qs'
// import { ElMessage, ElMessageBox } from 'element-plus'

const baseURL = import.meta.env.VITE_APP_URL
const http = axios.create({
  baseURL,
  timeout: 20000,
})

// 在发起请求时进行拦截，获取token
http.interceptors.request.use(
  req => {
    req.headers.Authorization = window.sessionStorage.getItem("token")
    return req
  },
  error => {
    return Promise.reject(error)
  }
)

// 当获取服务器返回的信息时进行的处理
http.interceptors.response.use(
  res => {
    if(res.data.code === 200) {
      return res.data
    }
    if(res.data.code === 404) {
      // ElMessage({ message: res.data.msg, type: 'warning'})
      return res.data
    }
  },
  error => {
    if(error.response.status === 401 && window.sessionStorage.getItem("token")) {
      window.sessionStorage.removeItem("token")
      // ElMessageBox.alert('登录超时，请重新登录', '提示', {
      //   type: 'warning', 
      //   showClose: false, 
      //   confirmButtonText: '确认', 
      //   callback:() => { router.push('/login') }
      // })
    } else {
      return Promise.reject(error)
    }
  }
)

const api = {}

api.get = function(url, params={}, useQs=false) {
  return new Promise((resolve) => {
    http({ method: "get", url: url, params: useQs ? qs.stringify(params, { arrayFormat: 'indices' }) : params }).then((res)=>{ resolve(res ) })
  })
}

api.getBlob = function(url, params) {
  return new Promise((resolve) => {
    http({ method: "get", url: url, params:params, responseType: "blob"}).then((res) => { resolve(res) })
  })
}

api.post = function(url, params, useQs=false) {
  let data
  useQs ? data = qs.stringify(params) : data = params
  return new Promise((resolve) => {
    http({ method: "post", url: url, data:data }).then((res) => { resolve(res) })
  })
}

api.put = function(url, params, useQs=false, useData=true) {
  let data
  useQs ? data = qs.stringify(params) : data = params
  return new Promise((resolve) => {
    if(useData) {
      http({ method: "put", url: url, contentType: "application/x-www-form-urlencoded", data: data }).then((res) => { resolve(res) })
    } else {
      http({ method: "put", url: url, contentType: "application/x-www-form-urlencoded", params: params }).then((res) => { resolve(res) })
    }
  })
}

api.delete = function(url, params) {
  return new Promise((resolve) => {
    http({ method: "delete", url: url, params:params }).then((res) => { resolve(res) })
  })
}

export default api
