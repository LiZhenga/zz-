import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Index.vue'
import users from '../store/user'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Details.vue')
  },
  {
    path: '/newBlog',
    name: 'NewBlog',
    component: () => import('../components/NewBlog.vue')
  },
  {
    path: '/recompose',
    name: 'Recompose',
    component: () => import('../components/Recompose.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path==='/login'||to.path==='/register') {
    next()
  }else{
    console.log(users.state.mark);
    if (users.state.mark) {
      next()
    }
    else{
      alert("请注册")
      router.push({path:'/register'})
    }
  }
})

export default router
