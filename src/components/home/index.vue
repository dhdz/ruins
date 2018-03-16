<template>
	<div class="home">
		<search></search>
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
<div class="picker-box">
	<mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount='5'></mt-picker>
</div>

	</div>
</template>
<script>
import store from "@/store/store"
import Cookie from '@/libs/cookie'
import Search from './search_bar'
export default {
	name: 'home',
	components:{
		Search
	},
	data () {
		return {
			msg: '首页',
			slots: [
        {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06','2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '.',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06','2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
		}
	},
	created(){
		console.log(23333)
			this.userLoginState()
	},
	methods:{
		btn(){
			Cookie.set("userDate",'storg本地存储',{expires:1})
		},
    onValuesChange(picker, values) {
    	console.log(values)
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
	}
}
</script>
<style scoped>


</style>
