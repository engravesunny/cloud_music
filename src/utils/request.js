import axios from 'axios'

const request = axios.create({
    baseURL:'/api',
    withCredentials: true,
    timeout:10000
})

// 请求拦截
request.interceptors.request.use(config => {
    if (config.method == 'post') {
        config.data = {
          ...config.data,
          _t: Date.parse(new Date()) / 1000
        }
      } else if (config.method == 'get') {
        config.params = {
          _t: Date.parse(new Date()) / 1000,
          ...config.params
        }
      }
    return config;
}, error => {
    Promise.reject(error);
})

// 响应拦截
request.interceptors.response.use(response=>{
    return response;
}, error => {
    return Promise.reject(error);
})

export default request;
