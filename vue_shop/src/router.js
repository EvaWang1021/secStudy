import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Welcome from './components/Welcome.vue'
import Users from './components/users/Users.vue'


Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { 
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        {path:'/welcome',component:Welcome },
        {path:'/users',component:Users}
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to,from,next)=>{
  // to 将要访问的路径
  // from代表从哪个路径跳转而来
  // next是一个函数，表示放行
  // next()放行 next('/login')强制跳转到
// ???????为啥都没有分号？？？？？？？？
  if(to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // token值为空，强制跳转login界面
  if(!tokenStr)return next('/login')
  next()
})

export default router
