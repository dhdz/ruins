<template>
	<div class="home">
		<search></search>
<mt-button type="default">default</mt-button>
<mt-button type="primary">primary</mt-button>
<mt-button type="danger">danger</mt-button>
<div class="picker-box">
	<mt-picker :slots="slots" @change="onValuesChange" visibleItemCount='5'></mt-picker>
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

/*font*/
@font-face {font-family: "aliconfont";
  src: url('../../accets/font/iconfont.eot'); /* IE9*/
  src: url('../../accets/font/iconfont.eot') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('../../accets/font/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../../accets/font/iconfont.svg') format('svg'); /* iOS 4.1- */
}
.alicon {
  font-family:"aliconfont" !important;
  font-size:16px;
  line-height:1;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.alicon-linechart:before { content: "\e762"; }
.alicon-barchart:before { content: "\e61e"; }
.alicon-cow:before{content:"\e690";}
.alicon-home:before{content:"\e9bb";}
.alicon-inquiry:before{content:"\e611";}
.alicon-strategy:before{content:"\e6d9";}
.alicon-news:before{content:"\e730";}
.alicon-user:before{content:"\e63e";}
.alicon-search:before{content:"\e741";}
.alicon-caretup:before{content:"\e770";}
.alicon-caretdown:before{content:"\e76d";}
.alicon-arrowleft:before{content:"\e63c";}
.alicon-arrowright:before{content:"\e620";}
.alicon-arrowup:before{content:"\e63d";}
.alicon-arrowdown:before{content:"\e63f";}
.alicon-add:before{content:"\e931";}
.alicon-cut:before{content:"\e95e";}
.alicon-edit:before{content:"\e616";}
.alicon-top:before{content:"\e67e";}
.alicon-drag:before{content:"\e6ab";}
.alicon-inquiry:before{content: "\e645";}
.alicon-assets:before{content: "\e60f";}
.alicon-up:before{content: "\e955";}
.alicon-down:before{content: "\e974";}
</style>
