<template>
	<div class="search-bar">
		<div class="search-form-box">
			<form >
				<div class="ipt-icon">图</div>
				<div class="ipt-bar">
					<input type="search" placeholder="搜索关键字">
				</div>
				<div class="ipt-btn">确定</div>
			</form>
		</div>
	</div>
</template>
<script>
export default {
	name: 'search_bar',
	data () {
		return {
			msg: ''
		}
	},
	methods:{

	},
    created(){

    }
}
</script>
<style scoped lang="scss">
.search-bar{
	.earch-form-box{
		width: 500px;
		heiht:500px;
		background: #f00;
	}
}
</style>
