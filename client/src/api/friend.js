import { request } from '@/utils/ajax'
import qs from 'qs'
export const AddFriend = (params) => request.post("./friend/addfriend", qs.stringify(params))

export const GetMyFriends = (params) => request.get("./friend/getmyfriend", { params })

export const GetNewFriends = (params) => request.get("./friend/getnewfriend", { params })

export const AcceptFriend = (params) => request.post("./friend/acceptfriend", qs.stringify(params))
