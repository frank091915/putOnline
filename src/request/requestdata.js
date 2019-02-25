import axios from "axios"
//引入等待图标插件
import {Indicator} from "mint-ui"
//引入弹出提示框
import { Toast } from 'mint-ui';

//此页面仅提供请求的数据,由其他模块引入进行后续操作

const ajax =axios.create({

});

//请求首页轮播图路径的方法
const getswiperimgs=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/126599/swiper")
}
//请求分类列表导航栏的数据
const getcategorynav=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/126599/frank")
}

//请求下级分类列表的数据
const getsubcategory=(categoryid)=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/126599/subcagetorynav")
}

//登录
const toSignIn=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/126599/signIn")
}

//注册
const toSignUp=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/126599/signUp")
}



const getrecommend=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/127067/recommend")
};
//请求首页选项卡
const getclassify=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/127067/classify")
};
//请求选项卡下内容
const gethomelist=(id)=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/127067/homelist?id="+id)
};
//详情页
const getdetail=(id)=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/127067/detail?id="+id)
}
//minelist
const getminelist=()=>{
	return ajax.get("http://rap2api.taobao.org/app/mock/127067/mine")
}
const gethomeswiper=()=>{
//	请求方式get post自己写
	return ajax.get("http://rap2api.taobao.org/app/mock/127067/swiper")
};





//拦截请求,并进行操作,显示等待图标
ajax.interceptors.request.use((config)=>{
//	Indicator.open({text:"loading..."});
	return config
});

//拦截相应,对相应数据进行操作并返回,顺带关掉indicator
ajax.interceptors.response.use((config)=>{
//	Indicator.close();
	if(config.data.res_code==1){
		return config.data

	}else{
		Toast({
		  message: '数据加载异常',
		  position: 'bottom',
		  duration: 5000
		});
	}
	console.log(config)

})

//导出模块
export{
	getswiperimgs,getcategorynav,getsubcategory,gettabbar,toSignIn,toSignUp,gethomeswiper,getrecommend,getclassify,gethomelist,getdetail,getminelist
}
