import { Login } from '@/api/user'
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
    }
}