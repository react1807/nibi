// 请求接口
import axios from "axios";
// 设置默认访问路径
axios.defaults.baseURL = "http://127.0.0.1:7001"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// 获取登录数据
export let getName = () => {
    // 使用 axios
    return axios.post('/login');
}
// 首页
export let getIndex = () => {
    // 使用 axios
    return axios.post('/login');
}
