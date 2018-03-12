<template>
	<div class="home">
			hello!{{$store.state.userDate.userName}}
			<button @click="btn">按钮</button>

	</div>
</template>

<script>
import store from "@/store/store"
import Cookie from '@/libs/cookie'
export default {
	name: 'home',
	data () {
		return {
			msg: '首页'
		}
	},
	methods:{
		btn(){
			Cookie.set("userDate",'用户数据cookie',{expires:1})
		}
	},
    created(){
      this.userLoginState()
    }
}
</script>
<style scoped lang="scss">

.home{
	font-size: 100px;
	span{
		background: #f00;
		b{
			background: #00f;
		}
	}
}
</style>
