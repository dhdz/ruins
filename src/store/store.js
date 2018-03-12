import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	userDate:{}
}
//在mutations中加入改变state的方法。
//mutations是固定的写法,要改变store中state的值必须写在其中
//第一个参数state是默认的store中的state,之后的才用来接收外面组件传参
const mutations={
	userUpDate(state,upEd){
		state.userDate=upEd
		state.storeTxt=upEd.txt
	}
}
//使用方法:
//在组件中用import引入此js文件,使用this.$.store.state.状态名来获取
//也可以创建新状态this.$.store.state.状态名=xxx
//mutations中的方法用this.$.store.commit("方法名",参数)
export default new Vuex.Store({
	state,
	mutations
});