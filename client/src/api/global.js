import { request } from '@/utils/ajax'
import axios from 'axios'

export const UploadFile = file => request.post("./global/uploadfile", file, {
    headers: {
        'Content-Type': 'multipart/form-data;charset=UTF-8'
    }
})
