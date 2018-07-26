<template>
	<div class="login-page-bg">
		<div class="login-wndow">
			<div class="reg-btn" ><span>关闭</span></div>
			<div class='login-ipt-item'><div><p>账号登录</p></div></div>
			<div class='login-ipt-item'><div class="log-ipt"><span contenteditable="true" @input="iptBind" v-html="userName"></span><i class="fa fa-user-circle-o"></i><em></em></div></div>
			<div class='login-ipt-item'><div class="log-ipt"><span contenteditable="true" v-bind="userPass"></span><i class="fa fa-lock"></i><em></em></div></div>
			<div class='login-ipt-item'><div class="log-check"><a href="javascript:;" class="fa" :class="serverLogin?'fa-check-square':'fa-square-o'" @click="serverLogin=!serverLogin">记住登录状态</a></div></div>
			<div class='login-ipt-item foot-item'><div class="log-btn"><b class="button" v-text="registerOff?'登录':'注册并登录'">登录</b> <a href="javascript:;" @click="registerOff=!registerOff">注册</a></div></div>
		</div>
	</div>
</template>
<script>
import local from '@/libs/local_storage'
import md5 from 'blueimp-md5'//md5加密插件
export default {
	name: 'loginIndex',
	data () {
		return {
			userName:'233',
			userPass:'',
			loginMsg:'用户或密码错误',
			error:false,
			serverLogin:false,
			registerOff:true,
		}
	},
	watch:{
		userName(val){
			console.log(val)
			this.error=false
		},
		userPass(){
			this.error=false
		}
	},
	created(){

		},
		mounted(){

		},
		methods:{
			checked(){
				this.serverLogin=this.$refs.serveUserLogin.checked
			},
			iptBind(data){
				console.log(data)
				console.log(this.userName)
			},
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
.login-page-bg{
	position: fixed;
	top: 0;
	left: 0;
	z-index:1000;
	width: 100vw;
	min-width:300px;
	height:100vh;
	min-height:300px;
	background: rgba(0,0,0,.6);
	.login-wndow{
		position: absolute;
		top: 50%;
		left: 50%;
		transform:translate(-50%,-50%);
		width: 300px;
		height:300px;
		background: #f5f5f5;
		border-radius:10px;
		box-shadow:2px 2px 8px 0 #000;
		text-align: left;
		.reg-btn{
			position: absolute;
			top: 0;
			right: 0;
			z-index:1002;
			width: 30px;
			height:30px;
			text-align: center;
			background: linear-gradient(45deg,#aaa,#ccc,#555 50%,#d9534f 60%);
			transition:.35s;
			box-shadow:-1px 1px 10px 0 #555;
			border-radius:0 10px 0 10px;
			overflow:hidden;
			white-space:nowrap;
			user-select:none;
			cursor:pointer;
			span{
				position: absolute;
				top: 10px;
				right:10px;
				color:#333;
				font-size: 16px;
				font-weight:700;
				transition:.15s;
				opacity:0;
			}
			&:hover{
			width: 100px;
			height:60px;
			box-shadow:-1px 3px 10px 0 #555;
			background: linear-gradient(30deg,#aaa,#ccc,#555 50%,#d9534f 60%);
			span{
				opacity:1;
				transition:.35s;
			}
			}
		}
		.login-ipt-item{
			line-height: 30px;
			div{
				position: relative;
				margin:0 20px 10px;
			}
			.log-ipt{
				padding-left: 40px;
				padding-right: 10px;
				background: #ddd;
				border-radius:3px;
				i{
					position: absolute;
					z-index:1002;
					top:5px;
					left: 10px;
					font-size: 20px;
					text-align: center;
					transition:.3s;
					&:before{
						display: inline-block;
						width: 30px;
					}
				}
				span[contenteditable=true]{
					position: relative;
					z-index:1002;
					display: block;
					width: 100%;
					height:30px;
					overflow:hidden;
					white-space:nowrap;
					box-sizing:border-box;
					transition:.3s cubic-bezier(0.45,-0.05, 0.35, 0.32);
					&:focus{
						outline:none;
						color:#fff;
					}
					&:focus~em{
						width: 100%;
						left:0;
						right:auto;
					}
					&:focus~i{
						color:#fff;
					}
				}
				em{
					position: absolute;
					z-index:1001;
					bottom:0;
					right:0;
					left:auto;
					display: block;
					width: 0%;
					height:100%;
					box-sizing:border-box;
					border-radius:3px;
					background: #f0ad4e;
					transition:.3s cubic-bezier(0.45,-0.05, 0.35, 0.32);
				}
			}
			.log-check{
				a{
					text-align: right;
					font-size: 14px;
					&:before{
						display: inline-block;
						width: 20px;
						margin-right: 10px;
					}
				}
			}
			.log-btn{
				.button{
					position: relative;
					display: inline-block;
					width: 100px;
					height:30px;
					text-align: center;
					font-size: 16px;
					font-weight:500;
					color:#555;
					user-select:none;
					line-height: 30px;
					background: #f0ad4e;
					background: linear-gradient(#ffc97c,#ff9600);
					box-shadow:1px 1px 3px 0 #555,1px 1px 3px 0 #ccc inset;
					overflow: hidden;
					border-radius:3px;
					cursor:pointer;
					vertical-align:middle;
					&:after{
						content:'';
						position: absolute;
						top: 0%;
						left: -100%;
						width: 100%;
						height:100%;
						background: linear-gradient(
							50deg,transparent 30%,
							rgba(255,255,255,.6) 80%,
							transparent 80%
							);
					}
					&:hover{
						&:after{
							transition:.5s;
							left: 100%;
						}
					}
					&:active{
						box-shadow:1px 1px 3px 0 #555 inset;
						line-height: 28px;
						text-indent:-2px;
					}
				}
				a{
					display: inline-block;
					font-size: 14px;
					line-height: 30px;
					color:#888;
					margin-left: 20px;
				}
			}
		}
		.foot-item{
			position: absolute;
			bottom:10px;
			left:0;
			width: 100%;
		}
	}
}
</style>
