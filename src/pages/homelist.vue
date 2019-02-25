<template>
	<div class="homelists">
		<div v-for="list in homelist"
			:key="list.name"
			@click="todetail(list.id)"
			class="product"
			>
			<img :src="list.img" class="image"/>
			<p>{{list.name}}</p>
			<p class="price">￥{{list.price}}</p>
		</div>
	</div>
</template>

<script>
//	页面缓存，为了提高性能，同一页面下的分类每次点击都去请求服务器发送ajax请求
//	不利于网页性能优化,用数据缓存,请求过的缓存 没请求过得再去发送请求数据
	const cache={};
	export default{
		name:"homelist",
		data(){
			return{
				homelist:[]
			}
		},
//		二级路由为点击跳转 用methods方法
		methods:{
			getdata(_id){
//				发送请求前先看之前是否有发送过请求，看下cache里有没有数据
				if(Object.keys(cache).includes(_id)){
					this.homelist=cache[_id]
					
				}else{
					//没有请求过就把请求回来的数据res存在cache里
					this.$http.gethomelist(_id).then(res=>{
					this.homelist=res.res_body.list;
					cache[_id]=res.res_body.list;
//					console.log(cache)
				})
				}
				
			},
			todetail(id){
				this.$router.push("/detail/"+id)
			}
			
		},
		/*用导航守卫,beforeRouteEnter(不能调用到this=>next())
			beforeRouteUpdate默认显示的页面打开就有数据渲染 如果不写就要点击路由数据有变化（beforeRouUpdate）才会变化请求数据*/
		beforeRouteEnter(to,from,next){
//			可以给next传个回调函数去间接获得this（组件实例），就可以把组件实例作为回调函数参数传进去,形参vm就是该组件实例
			next(vm=>{				
				vm.getdata(vm.$route.params.homelistid)
			})
		},
//		当前路由改变，但是组件复用时使用，必须要next()才能往后走
		beforeRouteUpdate(to,from,next){
//			这里可以调用this
			this.getdata(to.params.homelistid);
			next();
		}

	}
			
		
	
</script>

<style lang="scss">
	.homelists{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		.product{		
			width: 48vw;
			height: 72vw;
			.image{
				width: 100%;
				height: 53vw;
			}
			p{
				font-size: 14px;
			}
			.price{
				color: #ff699c;
				text-align: center;
			}
		}
	}
	
</style>