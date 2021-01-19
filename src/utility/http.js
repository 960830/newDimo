import axios from 'axios'

const http = axios.create({
baseURL : 'http://120.53.31.103:84/api/app/',
timeout : 6000
})

// 请求拦截器
http.interceptors.request.use((config)=>{
let token = window.sessionStorage.getItem('token')
config.headers = {
Authorization:`Bearer ${token}`,
DeviceType: 'H5',
// DeviceID: ID
}
return config
})

// 相应拦截器
http.interceptors.response.use((response)=>{

return response
})

export default http