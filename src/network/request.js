import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 6000
  });
  // 拦截器interceptors P163【请求拦截器】
  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    // console.log(error);
  });
  // 【响应拦截器】
  instance.interceptors.response.use(result => {
    return result.data;
  }, error => {
    console.log(error);
  });
  // 返回的是new Promise
  return instance(config);

}