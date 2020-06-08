import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss'
import global from './utils/global'
import VueSocketIO from 'vue-socket.io'
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3008',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(global)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
