//因为涉及到的ajax请求比较多,所以单独建一个文件夹放ajax请求
//本页面只是单独的做请求 不做数据处理渲染这些
//安装包 npm i axios -S
import axios from "axios";

//因为是在js引入mintui组件而不是在vue里 所以这里要引入
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';

//创建一个axios实例
const ajax=axios.create({
//	基于要请求数据的后台url 到时候换成真实网站的接口
	baseURL:'http://rap2api.taobao.org/app/mock/127067'
	
});

//发送请求前拦截数据添加点样式。参数为请求或响应的数据，拦截后再放出
ajax.interceptors.request.use(config=>{
	//config里还有其他属性值可以根据值进行不同的操作 如status：返回的状态 可以根据这个判断页面是不是404
	console.log(config)
	Indicator.open({
		text:"加载中...",
		spinnerType: 'fading-circle'//转圈样式
	})
//	拦截后还要把请求发出去
	return config
	
});
//数据响应回来也要拦截操作
ajax.interceptors.response.use(res=>{
//	Indicator打开后还要关掉 在数据响应回来的时候关掉 再把拦截的数据放出去
	Indicator.close();
//	console.log(res);   
	if(res.data.res_code==1){
		
		return res;
	}else{
		Toast({
			  message: '请求数据异常',
			  position: 'bottom',
			  duration: 2000
			})
	};
	
});
//axios是基于promise的http库,所以有then（）方法

//请求首页轮播图数据
const gethomeswiper=()=>{
//	请求方式get post自己写
	return ajax.get("/swiper")
};
//请求首页轮播图下面的推送数据
const getrecommend=()=>{
	return ajax.get("/recommend")
};
//请求首页选项卡
const getclassify=()=>{
	return ajax.get("/classify")
};
//请求选项卡下内容
const gethomelist=(id)=>{
	return ajax.get("/homelist?id="+id)
};
//详情页
const getdetail=(id)=>{
	return ajax.get("/detail?id="+id)
}
//minelist
const getminelist=()=>{
	return ajax.get("/mine")
}

export{gethomeswiper,getrecommend,getclassify,gethomelist,getdetail,getminelist}
