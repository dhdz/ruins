import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Home from '@/components/home'
import Menu from '@/components/menu'
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
			path:'/menu',
			component:Menu
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
