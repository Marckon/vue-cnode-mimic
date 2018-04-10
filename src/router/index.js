import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'
import GetStart from '../components/GetStart/GetStart'
import APIComp from '../components/APIComp'
import AboutComp from '../components/AboutComp'
import Register from '../components/Register'
import SignIn from '../components/SignIn'
import Article from '../components/Article/Topic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Home
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/getstart',
      component: GetStart
    },
    {
      path: '/api',
      component: APIComp
    },
    {
      path: '/about',
      component: AboutComp
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/signin',
      component: SignIn
    },
    {
      path:'/topic/:artID',
      name:'topic',
      component:Article
    }
  ]
})
