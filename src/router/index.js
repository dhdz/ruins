import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import Link from '@/components/link'
import Me from '@/components/me'

Vue.use(Router)

export default new Router({
mode:'history',
  routes: [
		{
			path:'/',
			component:Home
		},
		{
			path:'/login',
			component:Login
		},
		{
			path:'/link',
			component:Link
		},
		{
			path:'/me',
			component:Me
		}

  ]
})
