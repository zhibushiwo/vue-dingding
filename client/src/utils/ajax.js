import axios from 'axios'
import { BASE_URL } from '@/config'

export const request = createBaseInstance()
function createBaseInstance() {
    const instance = axios.create({
        baseURL: BASE_URL
    })
    instance.interceptors.request.use(handleRequest)
    instance.interceptors.response.use(handleResponse, handleError)
    return instance
}
function handleError(e) {
    throw e
}
function handleResponse(res) {
    const { authorization } = res.headers;
    authorization && localStorage.setItem('token', authorization);
    return res.data
}
function handleRequest(config) {
    if (localStorage.token) {
        config.headers.Authorization = `Bearer ${localStorage.token}`
    }
    return config;
}