<template>
	<div class="login-index">
			<div class="login-window">
				<div class="login-form-title"><h4>登录</h4><p><span v-if="error">{{loginMsg}}</span></p></div>
				<form @submit.prevent="loginLSbmit">
					<div class="login-form-item"><label for="loginFormIptName"></label><input type="text" id="loginFormIptName" placeholder="Name" v-model="userName"/></div>
					<div class="login-form-item"><label for="loginFormIptPass"></label><input type="password" id="loginFormIptPass" placeholder="Pass" v-model="userPass"/></div>
					<div class="login-form-item"><button>提交</button></div>
				</form>
			</div>
			<div class="footer-copy">
					<div class="footer-left">ember-2018</div>
					<span><a href="http://www.miitbeian.gov.cn/">冀ICP备17031154号-2</a></span>
					<div class="footer-right"></div>
			</div>
	</div>
</template>
<script>
import Cookie from '@/libs/cookie'
import local from '@/libs/local_storage'
import md5 from 'blueimp-md5'//md5加密插件
export default {
	name: 'loginIndex',
	data () {
		return {
			userName:'',
			userPass:'',
			loginMsg:'用户或密码错误',
			error:false
		}
	},
	watch:{
		userName(){
			this.error=false
		},
		userPass(){
			this.error=false
		}
	},
	created(){
		// this.unescape=unescape(str)
		// this.decodeURI=decodeURI(str)
		// if(Cookie.get("userDate")!=undefined){
		// 	console.log(Cookie.get("userDate"))
		// 	let sDate={
		// 		userName:Cookie.get("userDate")
		// 	}
		// 	this.$store.state.userDate=sDate;
		// 	this.$router.push('home')
		// }
		},
		mounted(){
		// Rythm.addRythm('pulse', 'pulse', 0, 10);
		// Rythm.setMusic("sample.mp3");
		// Rythm.start();
		},
		methods:{
			loginLSbmit(){
				if(this.userPass=='5233'){
					local.set('key',md5(this.userPass))
					// window.location.href="http://www.dezhix.com"
					this.$router.replace('/')
				}else{
					this.error=true
				}
			}
		}
}
</script>
<style scoped lang="scss">
.login-index{
	height:100vh;
	background:#333 url("../../assets/img/bg.jpg") no-repeat center;
	background-size:cover;
	.login-window{
		position: fixed;
		top:50%;
		right:50%;
		transform:translateY(-50%) translateX(50%);
		background: rgba(0,0,0,.6);
		padding:30px 30px;
		border-radius:20px;
		.login-form-title{
			h4{
				font-size: 30px;
				// font-weight:800;
				color:#f5f5f5;
				margin: 0;
			}
			p{
				height:16px;
				color:#d00;
				span{
					line-height: 1;
					font-size: 16px;
				}
			}
			margin-bottom: 30px;
		}
		form{
			.login-form-item{
				height:30px;
				&+*{
					margin-top: 20px;
				}
				&>*{
					height:100%;
					border-radius:5px;
					&:focus{
						outline:none;
					}
				}
				input{
					padding:0 15px;
				}
				button{
					width: 100%;
					background-color: #ccc;
					background: linear-gradient(#ccc,#666);
					color:#fff;
					border: 0;
					&:active{
						background: linear-gradient(#666,#999);
					}
				}
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
		font-size: 12px;
		transition:opacity .25s ;
		opacity:.4;
		&:hover{
			opacity:.8;
		}
		span{
			a{
				color:#ccc;
				text-decoration:none;
			}
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
