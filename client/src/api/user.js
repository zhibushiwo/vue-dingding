import { request } from '@/utils/ajax'
import qs from 'qs'

export const Login = params => request.post('/user/login', qs.stringify(params))

export const Register = params => request.post('/user/register', qs.stringify(params))

export const GetUserInfo = () => request.get('/user/getList')

export const GetSearchUser = params =>
    request.get(`/user/getuser`, { params })

