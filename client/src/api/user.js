import { request } from '@/utils/ajax'
import qs from 'qs'

export const Login = params => request.post('/user/Login', qs.stringify(params))

export const Register = params => request.post('/user/Register', qs.stringify(params))
