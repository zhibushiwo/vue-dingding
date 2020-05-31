import { request } from '@/utils/ajax'
import qs from 'qs'
const SendMessage = (params) => request.post("./message/sendmessage", qs.stringify(params))

const GetMessage = (params) => request.get("./message/getmessage", { params })