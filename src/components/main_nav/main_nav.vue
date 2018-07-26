<template>
<div id="main_nav">
	<div class="nav-bar">
			<nav>
				<router-link to="/" tag="div"><span>首页</span></router-link >
				<router-link to="/menu" tag="div"><span>栏目1</span></router-link >
				<router-link to="/link" tag="div"><span>栏目2</span></router-link >
				<router-link to="/me" tag="div"><span>栏目3</span></router-link >
			</nav>
	</div>
</div>
</template>
<script>
export default {
	name: 'main_nav',
	data () {
		return {
			msg: '测试233'
		}
	},
	beforeCreate(){
		// this.$router.replace("/")
	},
	watch:{

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	#main_nav{
		min-width: 150px;
		max-width:150px;
		height: 100vh;
		background: #333;
		overflow: hidden;
		transition:transform .35s;
		color:#f5f5f5;
		.nav-bar{
			height:100%;
			nav{
				@include  flex-box;
				flex-direction:column ;
				height:100%;
				text-align: center;
				div{
					position: relative;
					@include flex-num;
					flex-direction:column ;
					transition:.2s;
					&:hover{
						background: #666;
						box-shadow:0 0 10px 6px #333 inset;
					}
					border-bottom: 1px solid #ccc;
					span{
						display: block;
						position: absolute;
						top:50%;
						left:50%;
						transform:translate(-50%,-50%);
						font-size:18px;
						width: 18px;
					}
				}
			}
		}
	}
</style>
