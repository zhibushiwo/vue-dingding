import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
export const menuRoutes = [
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/chat/index'),
    meta: {
      title: "消息",
      icon: "message_fill"
    }
  },
  {
    path: '/ding',
    name: 'ding',
    component: () => import('../views/ding/index'),
    meta: {
      title: "Ding",
      icon: "dingtab"
    }
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/work/index'),
    meta: {
      title: "工作",
      icon: "work_fill"
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact/index'),
    children: [
      {
        path: "friends",
        component: () => import('../views/contact/friends'),
      },
      {
        path: "newfriends",
        component: () => import('../views/contact/newfriends'),
      },
      {
        path: "groups",
        component: () => import('../views/contact/groups'),
      },
      {
        path: "speical",
        component: () => import('../views/contact/special'),
      }
    ],
    meta: {
      title: "通讯录",
      icon: "addresslist_fil"
    }
  }

]

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/chat'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index'),
    },
    ...menuRoutes
  ]
})

