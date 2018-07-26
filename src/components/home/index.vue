<template>
	<div class="home-index">
		<transition
		enter-active-class='animated fadeInDownBig'
		leave-active-class='animated fadeOutDown'
		>
			<iframe v-if="nowUrl!==''" class="search-target-box animate fadeIn" :src="nowUrl" name="searchTargetBox" frameborder="0"></iframe>
		</transition>
		<form :class="{'search-form':true,'form-on':nowUrl==''}" @submit.prevent ="submit">
			<div class="form-item">
				<input type="search" v-model="value" :placeholder="inputMsg"/>
				<select name="searchType" v-model="contType">
					<option value="">普通搜索</option>
					<option value="“替换”">精确匹配搜索</option>
					<option value="《替换》">搜索文章</option>
					<option value="filetype">搜索指定格式</option>
					<option value="intitle">指定标题下搜索</option>
					<option value="site">指定域名中搜索</option>
				</select>
				<button>搜索</button>
			</div>
		</form>
		<login-window></login-window>
	</div>
</template>
<script>
// import store from "@/store/store"
// import Cookie from '@/libs/cookie'
import loginWindow from '@/components/universal/login_window.vue'
export default {
	name: 'home',
	components:{
		loginWindow
	},
	data () {
		return {
			msg: '首页综合简易搜索',
			inputMsg:'普通搜索,可以使用+/-来过滤内容',
			value:'',
			targetUrl:'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&wd=',
			nowUrl:'',
			contType:'',
			searchTime:null,
		}
	},
	created(){
		if(this.$store.state.nowSearchContUrl){
			this.nowUrl=this.$store.state.nowSearchContUrl
		}
	},
	watch:{
		value(val){
			this.searchContent(val);
		},
		contType(val){
			if(val==''){
				this.inputMsg='普通搜索,可以使用+/-来过滤内容'
			}else if(val.indexOf('替换')>=0){
				this.inputMsg='输入单个关键词'
			}else{
				this.inputMsg='关键字+空格+指定条件(如:地图 uuu9  或者:文件名 png)'
			}

			this.searchContent(this.value);
		}
	},
	mounted(){

	},
	methods:{
		submit(){
			this.searchContent(this.value)
		},
		searchContent(val){
			clearTimeout(this.searchTime)
			this.searchTime=setTimeout(()=>{
				let cont='';
				if(val==''){
					this.nowUrl=''
				}else{
					if(this.contType==''){
						this.nowUrl=this.targetUrl+val
						this.$store.state.nowSearchContUrl=this.targetUrl+val
					}else{
						if(this.contType=='filetype'){
							cont=val.replace(' ',' filetype:')
						}else if(this.contType=='site'){
							cont=val.replace(' ',' site:')
						}else if(this.contType=='intitle'){
							cont=val.replace(' ',' intitle:')
						}else{
							cont=this.contType.replace('替换',val)
						}
						this.nowUrl=this.targetUrl+cont
						this.$store.state.nowSearchContUrl=this.targetUrl+cont
					}
				}
			},300)
		}
	}
}
</script>
<style scoped lang="scss">
.home-index{
	height:100%;
	// padding-bottom: 3px;
	box-sizing:border-box;
	background: url('../../assets/img/bg.jpg');
	background-size: cover;
	background-position:center;
	.search-target-box{
		width: 100%;
		height:100%;
		box-sizing:bordr-box;
		margin-top: -3px;
	}
	.search-form{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height:90px;
		background: rgba(0,0,0,.8);
		box-shadow:0 3px 5px 0 #333;
		transition:.3s;
		.show{
			width: 200px;
			height:200px;
			background: #000;
		}
		.form-item{
			position: absolute;
			top: 50%;
			left: 50%;
			transform:translate(-50%,-50%);
			width: 60%;
			min-width: 300px;
			height:40%;
			&>*{
				float: left;
				box-shadow:0 0 3px 0 #aaa;
				height:100%;
				border: 0 solid #000;
				&:focus{
					outline:none;
				}
			}
			input{
				width: 50%;
				box-sizing:bordr-box;
				border-radius:10px 0 0 10px;
				font-size: 16px;
				padding:0 20px;
				&::-webkit-input-placeholder{
					font-size: 12px;
				}
			}
			select{
				width: 30%;
				max-width:150px;
				background-color:#888;
				background: linear-gradient(#ccc,#888);
				&:active{
					background: linear-gradient(#888,#ccc);
				}
			}
			button{
				width: 20%;
				max-width:150px;
				border-radius:0 10px  10px 0;
				background-color:#888;
				background: linear-gradient(#ccc,#888);
				&:active{
					background: linear-gradient(#888,#ccc);
				}
			}
		}
	}
	.form-on{
		top: 100px;
	}
}

</style>
