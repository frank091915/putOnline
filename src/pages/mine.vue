<template>
	<div >
		<div class="head">
		<span @click="back"><</span>
		<p>个人中心</p>
		<span>退出</span>
		</div>
		<div class="mindle">
<!--			<img src="../static/img/upload_5g85l55d280l94lfg678lcleegf5e_38x38.png" />
-->			<p class="username">username</p>
			<div class="information">
				<p><span>0</span>收藏的宝贝</p>
				<p><span>0</span>收藏的店铺</p>
				<p class="cart"><span class="roll"></span>优惠券</p>
				<p><span class="address"></span>收货地址</p>
			</div>
		</div>
		<div class="order">
			<p>全部订单</p>
			<p>待付款</p>
			<p>待收货</p>
			<p>待评价</p>
			<p>售后</p>
		</div>
		<div class="goods">
			<p>流行单品</p>
			<div class="product">
				<div class="product-list" @click="todetail(item.id)" v-for="item in productlist">
					<img :src="item.img" />
					<p>{{item.name}}</p>
					<p class="price">￥{{item.price}}</p>					
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
	export default{
		name:"mine",
		data(){
			return {
				productlist:[]
			}
		},
		created(){
			this.$http.getminelist().then(res=>{
				this.productlist=res.res_body.list
//				console.log(res)
			})
		},
		methods:{
			back(){
				this.$router.back()
			},
			todetail(id){
				this.$router.push("/detail/"+id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.head{
		display: flex;
		height: 16vw;
		justify-content: space-around;
		align-items: center;
		font-size: 18px;
		font-weight: 500;
		color: gray;
	}
	.mindle{
		height: 50vw;
		background:url(../assets/170612_397clbe2f78g6aljf0i6de6i28cgf_640x90.jpg) repeat-x;
		background-size:100% 50vw;
		img{
			margin-left:45vw ;
			margin-top: 20px;
			margin-bottom: 10px;
		}
		.username{
			text-align: center;
			height: 30px;
			border-bottom: 1px solid white;
			color: white;
		}
		.information{
			display:flex;
			justify-content: space-around;
			height: 22vw;
			color: white;
			p{
				font-size: 13px;
				width: 25vw;
				padding-top: 12vw;
				position: relative;
				width: 20vw;
			}
			.cart{
				border-left: 1px solid white;
				padding-left: 15px;
			}
			span{
				position: absolute;
				top: 20px;
				left: 20px;
				font-size: 18px;
				
				width: 10vw;				
			}
			.roll{
				background: url(../assets/ico_footer_extra2.gif) no-repeat center;
				top:3.5vw;
				left: 4.5vw;
				height: 8vw;
				
			}
			.address{
				height: 8vw;
				background: url(../assets/ico_footer_extra1.gif) no-repeat center;
				top:3.5vw;
				left: 3vw;
			}
		}
	}
	.order{
		display: flex;
		color: gray;
		height: 15vw;
		background: #F4F4F4;
		align-items: center;
		margin-top: 3vw;
		margin-bottom: 3vw;
		justify-content: space-around;

	}
	.goods{		
		background: #F4F4F4;
		p{
			color: gray;
			
			font-size: 15px;
			height: 10vw;
			line-height: 10vw;
		}
		.product{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;			
			.product-list{
				height: 72vw;
				img{
					width: 48vw;
					height: 56vw;
				
				}
				p{
					height: 6vw;
					text-align: center;
				}
				.price{
					color: black;
					
				}
			}
			}
			
	}
</style>