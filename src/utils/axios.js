import axios from 'axios'

//1. 创建新的axios实例，
const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 1000
});

// 2.请求拦截器
service.interceptors.request.use(  config => {
    config.data = JSON.stringify(config.data);
    let token = sessionStorage.getItem('token');
    if(token){
       config.headers.token= token; //如果要求携带在请求头中
     }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 3.响应拦截器
axios.interceptors.response.use( response => {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

//4.导入

export default service