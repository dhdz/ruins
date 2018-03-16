/*
* 全局函数库
*/
exports.install = function (Vue, options) {
   Vue.prototype.baseFn = function (){
    alert('baseFn执行成功1');
    };
    Vue.prototype.userLoginState = function (){
		switch(this.$store.state.userDate.userState)	{
		case 0:
		  // this.$router.push("/")
		  break;
		case 1:
			// this.$router.push("/")
		  break;
		default:
		  // this.$router.push("/login")//暂不支持登录
		}
    };
};