import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/store.js';//vuex的主要配置
import Cookie from '@/libs/cookie'//cookie插件
import 'normalize.css';//统一浏览器默认样式
import 'animate.css';//统一浏览器默认样式
import 'font-awesome/css/font-awesome.css';
import "./sass/main.scss";//主要样式文件
import baseFn from './store/base_fn'//全局函数库


Vue.use(baseFn);//全局函数当做插件来进行注册
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})

//全局函数,组件中直接用this.fnName()调用
Vue.prototype.fnName = function (){
	alert('mainFn执行成功');
}