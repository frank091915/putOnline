// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入store仓库
import store from "./store/index"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//引入所有请求数据
import * as $http from  "./request/requestdata.js";



//页面权限认证
router.beforeEach((to, from, next) => {
  if(to.meta.ischecked){
//			判断是否已在本地保存了登陆信息
		if(window.localStorage.getItem("kkuser")){
			next()
		}else{
			  		if(store.state.isSigned){
  			next()
  		}else{
  			next({name:"signIn",params:{from :to}})
  		}
		}
  }else{
  	next()
  }
})

//将数据挂到Vue的显示原型中,然后各子组件可通过实例获取这些数据
Vue.prototype.$http=$http;

Vue.use(MintUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
