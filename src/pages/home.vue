<template>	
	<div>
		<!--轮播图-->
		<div class="wisper">
			<mt-swipe :auto="4000">
			  <mt-swipe-item 
			  	v-for='img in swiperimg'
			  	:key="img.id">
			  	<img class="bg" :src="img.url"/>
			  	</mt-swipe-item>
			
			</mt-swipe>
		</div>
		<!--推荐图-->
		<div>
			<ul class="recommend">
				<li v-for="remData in recommend"
					:key="remData.id"					
					>
				<img class="recommendimg" :src="remData.img" />
				<p>{{remData.name}}</p>
				</li>
			</ul>
		</div>
		<!--选项卡-->
		<div class="headbar">			
			<router-link v-for="classifylist in classify"
				 :key="classifylist.id" 
				 :to="`/home/${classifylist.id}`" 
				 tag="div" 
				 class="chosecar">{{classifylist.name}}</router-link>
			
		</div>
		<!--商品推荐列表-->
		<router-view/>
	</div>
	
</template>

<script>
	
	export default{
		name:"home",
		data(){
			return {
				swiperimg:[],
				recommend:[],
				classify:[]
			}
		},
				
//		钩子函数可以调用$this（vue实例)上的各种方法属性
		created(){
			const _this=this;			
//			因为是promise方法得到的数据所以有个then方法
			this.$http.gethomeswiper().then(function(res){				
				_this.swiperimg=res.res_body.img
				console.log(_this.swiperimg);
			});
			this.$http.getrecommend().then(res=>{
				console.log(res)
				this.recommend=res.res_body.recommend
			});
			this.$http.getclassify().then(res=>{
//				console.log(res)
				this.classify=res.res_body.classify;
				/*异步请求的数据如何同步渲染出来：
				 * homelist渲染的数据为异步请求 页面加载进来的时候不能同步加载出来.解决$nextTick()
				$nextTick()数据修改更新后 立即使用这个方法得到更新后的dom*/
				
				this.$nextTick(()=>{
//					编程式导航
					this.$router.push(`/home/${this.classify[0].id}`)
				})
			})
		}
		
	}
</script>

<style lang="scss">
	.wisper{
		height: 54vw;
		
	}
	.bg{
			height: 100%;
			width:100%;
		}
	.recommend{
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 36vw;
		.recommendimg{
			width: 23vw;
		}
		p{text-align: center;}
	}	
	.headbar{
		display: flex;
		justify-content: space-around;
		background-color: #F4F4F4;
		height: 10vw;
		align-items: center;
		.chosecar{
			height: 10vw;
			line-height: 10vw;
			width: 40vw;
			text-align: center;
			
		}
	}
		
	
</style>