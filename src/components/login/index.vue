<template>
	<div id="login_page">
			<div class="login-window">
				<form>
					<div id="for_tit" class="form-title" v-text="msg">
					</div>
					<div class="user-name">
						<input type="text" />
					</div>
					<div id="audio_box"><div class="rythm-bass"></div><div class="rythm-bass"></div><div class="rythm-bass"></div></div>
				</form>
			</div>
			<div class="footer-copy">
					<div class="footer-left">页尾说明文字</div>
					<div class="footer-right">备案信息</div>
			</div>
	</div>
</template>
<script>
import Cookie from '@/libs/cookie'
//音乐动态
import Rythm from 'rythm.js'
export default {
	name: 'loginPage',
	data () {
		return {
			msg: '正在施工'
		}
	},
	created(){
		if(Cookie.get("userDate")!=undefined){
			let sDate={
				userName:Cookie.get("userDate")
			}
			this.$store.state.userDate=sDate;
			this.$router.push('home')
		}
	}
}

const rythm = new Rythm();
            rythm.setMusic("../../assets/audio/D1ofaquavibe.mp3");
            rythm.start();

</script>
<style scoped lang="scss">
#login_page{
	height:100vh;
	background:#333 url("../../assets/img/bg.jpg") no-repeat center;
	background-size:cover;
	.login-window{
		position: fixed;
		top:50%;
		right:50%;
		transform:translateY(-50%) translateX(50%);
		background: rgba(0,0,0,.5);
		padding:50px 30px;
		border-radius:20px;
		.form-title{
			font-size: 80px;
			color:#f5f5f5;
			text-shadow:0 0 2px 0 #fff;
		}
		.user-name{
			input{
				width: 100%;
				background-color: rgba(50,50,50,.5);
				border:0;
			}
		}
		#audio_box{
			display:flex;
			-webkit-justify-content: center;
           justify-content: center;
			div{
				width: 50px;
				height: 50px;
				border-radius:50%;
				border: 3px solid #ccc;
				box-shadow:0 0 3px 0 #f5f5f5;
			}
		}
	}
	.footer-copy{
		position: fixed;
		bottom:0;
		right:0;
		width: 100vw;
		box-sizing:border-box;
		padding:5px 30px;
		background: #333;
		color:#ccc;
		transition:opacity .25s ;
		opacity:.4;
		&:hover{
			opacity:.8;
		}
		.footer-left{
			float: left;
		}
		.footer-right{
			float: right;
		}
	}
}
</style>
