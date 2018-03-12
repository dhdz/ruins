<template>
<div id="main_nav" v-if="navOff">
	<div class="nav-bar">
			<nav>
				<router-link to="/home" tag="div"><span>首页</span></router-link >
				<router-link to="/menu" tag="div"><span>菜单</span></router-link >
				<router-link to="/link" tag="div"><span>链接</span></router-link >
				<router-link to="/me" tag="div"><span>个人</span></router-link >
			</nav>
			<div></div>
	</div>
</div>
</template>
<script>
export default {
	name: 'mainNav',
	data () {
		return {
			msg: '测试233',
			navOff:true
		}
	},
	beforeCreate(){
		this.$router.push("/")
	},
	watch:{
		$route(to){
			switch(to.path){
				case "/login":
				this.navOff=false
				break;
				default:
				this.navOff=true
				console.log(to.path)
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#main_nav{
		position: fixed;
		top: 0;
		left: 0;
		width: 50px;
		height: 100vh;
		background: #ccc;
		overflow: hidden;
		transition:transform .35s;
		.nav-bar{
			height:100%;
			nav{
				@include  flex-box;
				flex-direction:column ;
				height:100%;
				text-align: center;
				div{
					@include flex-num;
					flex-direction:column ;
					position: relative;
					&:hover{
						background: #aaa;
					}
					span{
						position: absolute;
						top:0;
						right:0;
						left:0;
						bottom:0;
						margin: auto;
						font-size:18px;
						width: 18px;
					}
				}
			}
		}
	}
</style>
