/**
 * @file 请求封装
 * @author mayoha
 */
import axios from 'axios';

const service = axios.create({
    timeout: 5000
});

// 请求拦截 也可用axios代替service实例来进行全局配置
service.interceptors.request.use((config) => {
    // 发送请求之前做些什么
    return config;
}, (err) => {
    // 对请求错误做些什么
    return Promise.reject(err);
});

// 响应拦截
service.interceptors.response.use((res) => {
    // 对响应的数据做些什么
    return res;
}, (err) => {
    // 对响应错误做些什么
    return Promise.reject(err);
});

export default service;