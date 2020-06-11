import { request } from '@/utils/ajax'
import qs from 'qs'
export const SendMessage = (params) => request.post("./message/sendmessage", qs.stringify(params))

export const GetMessage = (params) => request.get("./message/getmessage", { params })

