import Vue from 'vue'
import Vuex from 'vuex'
import userModule from './modules/user'
import chatModule from './modules/chat'
import groupModule from './modules/group'



Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: userModule,
    chat: chatModule,
    group: groupModule
  }
})
