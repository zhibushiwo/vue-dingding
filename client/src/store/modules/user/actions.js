import { Login, GetUserInfo } from '@/api/user'
import { Message } from 'element-ui'
export default {
    async login({ commit }, params) {
        try {
            const res = await Login(params)
            if (res.code == 200) {
                const { token, user } = res.data
                localStorage.setItem("token", token)
                Message({
                    message: "登录成功",
                    type: "success"
                })
                commit("setUser", user)
                return true
            } else {
                Message(res.msg)
                return true
            }

        } catch (e) {
            return false
        }
    },
    async authorization({ commit }) {
        try {
            const res = await GetUserInfo()
            if (res.code == 200) {
                console.log(res)
                const { user } = res.data
                // localStorage.setItem("token", token)
                Message({
                    message: "登录成功",
                    type: "success"
                })
                commit("setUser", user)
                return true
            } else {
                Message(res.msg)
                return true
            }
        } catch (e) {

        }
    }
}