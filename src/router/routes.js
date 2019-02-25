import home from "@/pages/home"
import categorypage from "@/pages/categorypage"
import maintext from "@/components/maintext"
import cart from "@/pages/cart"
import tabbar from "@/components/tabbar"
import head from "@/components/head"
import mine from "@/pages/mine"
import homelist from "@/pages/homelist"
import signIn from "@/pages/signIn"
import signUp from "@/pages/signUp"
import subcategory from "@/components/subcategory"

export default [
//重定向设置
	{
	path:"/",
	redirect:"/home",
	meta:{
		title:"",
		isrendered:false,
		ischecked:false
		}
	},
//	首页组件
    {
	name:"home",
	path:"/home",
	components:{
		header: head,
		main:home,
		tabbar
	},
	meta:{
		title:"首页",
		isrendered:true,
		ischecked:false,
		_src:require("../assets/upload_29e515a6k59k937a3ej3l5e6bfji2_36x39.png"),
       	src:require("../assets/upload_439ak5453ih43h5d2a109dhe71agg_36x39.png")		
		},
		children:[     	
      	{
      	 path: ':homelistid', //动态路由参数传递
      	/* 一个组件这样用
		component: list*/
//		引入多个组件,若果<router-view/>没有命名就用默认的要加default
		components:{
			default:homelist
		}
      	}
      
      ]
	},
//	商城页面组件
	{
	name:"categorypage",
	path:"/categorypage",
	components:{
		header: head,
		tabbar,
		main:categorypage
	},
	meta:{
		title:"分类",
		isrendered:true,
		ischecked:false,
        src:require("../assets/upload_3egkhdd8460el241d98kcl706ke65_34x34.png"),
        _src:require("../assets/upload_488lbkj7ll3e92bg3ld1kh5k73l87_34x34.png")

	},
	children:[
	{
		name:"subcategory",
		path:":categoryid",
		components:{
			subcategory:subcategory
		}
	}
	]
	},
//	详情页
	{
	name:"cart",
	path:"/cart",
	components:{
		header: head,
		main:cart,
	},
	meta:{
		title:"购物车",
		isrendered:true,
		ischecked:true,
        src:require("../assets/upload_0eabagglh39aggl8jihfakfbf70a9_40x38.png"),
        _src:require("../assets/upload_565i382k0hi45ek6chhj5603d41a8_40x38.png")
		}
	},
		{
	name:"mine",
	path:"/mine",
	components:{
		header: head,		
		main:mine,
		tabbar
	},
	meta:{
		title:"我的",
		isrendered:true,
		ischecked:true,
        src:require("../assets/upload_5g85l55d280l94lfg678lcleegf5e_38x38.png"),
        _src:require("../assets/idid_ifqtkztcgjstazrumezdambqgyyde_38x38.png")
		}
	},
	{
	name:"signIn",
	path:"/signIn",
	components:{
		header: head,		
		main:signIn,
		tabbar
	},
	meta:{
		title:"登录",
		isrendered:false,
		ischecked:false
		}
	},
		{
	name:"signUp",
	path:"/signUp",
	components:{
		header: head,		
		main:signUp,
		tabbar
	},
	meta:{
		title:"注册",
		isrendered:false,
		ischecked:false
		}
	}
]
