<template>
	<div id="app">
		<div class="app-child" name="cont">
			<router-view />
		</div>
		<main-nav v-if="navShow" class="app-child" />
	</div>
</template>
<script>
import MainNav from '@/components/main_nav/main_nav'
import local from '@/libs/local_storage'
import md5 from 'blueimp-md5'//md5加密插件
export default {
	components:{
		MainNav
	},
	data(){
		return{
			navShow:true
		}
	},
	created(){
		//判断路由为登录页
		if(this.$router.history.current.path==='/login'||this.$router.history.current.path==='/'){
			this.navShow=false
		}

		if(local.get('key')){
			if(local.get('key')===md5(5233)){
				console.log('验证通过')
				this.$router.replace('/');
			}else{
				this.$router.replace('/login');
			}
		}else{
			this.$router.replace('/login');
		}
	},
	watch:{
		$route(to){
			switch(to.path){
				case "/":
				this.navShow=false
				break;
				case "/login":
				this.navShow=false
				break;
				default:
				this.navShow=true
				// console.log(to.path)
			}
		}
	}
}
</script>
<style scoped lang="scss">
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	display:flex;
	flex-direction: row-reverse;
	.app-child{
		position: relative;
		flex: 1;
		// height:100%;
		&[name=cont]{
			height:100vh;
			overflow-y:auto;
		}
	}
}
</style>
