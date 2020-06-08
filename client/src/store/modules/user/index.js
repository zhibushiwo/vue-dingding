import { isDef } from '@/utils'
import { Login, GetUserInfo } from '@/api/user'
import { Message } from 'element-ui'
export default {
    namespaced: false,
    state: {
        user: null
    },
    getters: {
        user: (state) => state.user,
        isLogin: (state) => isDef(state.user)
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        }
    },
    actions: {
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
                    commit("setUser", res.data)
                    return true
                } else {
                    Message(res.msg)
                    return true
                }
            } catch (e) {

            }
        }
    },
}