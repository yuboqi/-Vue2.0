import axios from "axios";
//引入进度条
import nProgress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
const requests = axios.create({
    //基础路径，发送请求的时候，路径中会出现api
    baseURL: "/mock",
    //请求时间超过5s
    timeout: 5000,
});

//请求拦截器：在请求发送之前，拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
    nProgress.start();
    //config：配置对象，对象里面有一个属性很重要，headers请求头
    return config;
});


//响应拦截器：在请求发出去之后，拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.response.use((response) => {
    nProgress.done();
    return response.data;
},(error)=>{
    //响应失败回调函数
    return Promise.reject(new Error('false'));
});
export default requests