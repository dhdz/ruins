<template>
	<div id="app">
		<router-view/>
		<MainNav v-if="navShow"/>
	</div>
</template>
<script>
import MainNav from '@/components/main_nav/main_nav'
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
		if(this.$router.history.current.path==='/login'){
			this.navShow=false
		}
	},
	watch:{
		$route(to){
			switch(to.path){
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

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	&>div{
		p{
			display: block;
		}
	}
}
</style>
