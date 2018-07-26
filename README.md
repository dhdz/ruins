# dz-x个人项目

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 使用的功能库插件包:
vue-cli //vue-cli带路由脚手架
sass //css预编译 node-sass , sass-loader
	以及sass-resources-loader	//全局sass,免去繁琐的引入(按照官方配置会报错,PS:01)
vuex //状态值集中管理
normalize.css //修复浏览器自身的bug并保证各浏览器一致性,保留有用的默认样式而不是全去掉(*)
animate.css 	//过度动画库
https://github.com/MoeKit/cookie //cookie库
font-spider //字蛛,用于压缩中文字体(测试失败)
echarts 	//阿里的图表插件(已经弃用)
mintui	//<饿了吗>出的移动端ui框架(已经弃用)






# 项目文件目录:
meMainPage
	build
	config
	node_modules
	src	//项目主目录
		assets	//静态资源
		components	//组件集
			home	//页面组件
			link 	//页面组件
			login 	//登录页
			main_nav 	//主导航
			me 	//页面组件
			menu 	//页面组件
		libs
		router	//路由
			index.js	//路由配置
		sass	//主体样式
			color.scss 	//主体配色
			main.scss 	//主要样式
			mixin.scss 	//全局mixin函数
		store	//vuex以及全局js
			store.js 	//vuex主体
			base_function.js 	//全局函数
			filter.js 	//全局自定义过滤器
		App.vue	//组件入口
		main.js	//主要js脚本
	static
	index.html		//主页(title标题)
	package.json	//插件配置表
	README.md	//项目说明文本

# end


#说明:
PS01:
	网上找到的配置方法只需要将build/utils.js中
	scss: generateLoaders('sass'),
	换成如下代码即可正常使用
    scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: path.resolve(__dirname, '../src/sass/mixin.scss')//你的sass文件路径
        }
      }
    ),
