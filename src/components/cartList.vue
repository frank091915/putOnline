<template>
	<li class="cartItemLi">
		<div class="cartItemImg">
			<input type="checkbox" :checked="isSelected" @click="changeState(id)"/> <img :src="img"/>
		</div>
		<div class="cartItemInfo">
			<div class="cartItemTitle">
				<p class="itemTitle">{{title}}</p>
				<p class="itemProperty">{{description}}</p>
				<p class="priceP"><span class="price">￥{{price}}</span><span class="formerPrice">￥{{formerPrice}}</span></p>
				<p class="soldAmount">{{soldAmount}}</p>
			</div>
			<div fixed class="amountWraper">
				<span class="computedSpan" @click="addcount(id)">+</span>
				<span class="cartItemAmount">{{amount}}</span>
				<span class="computedSpan" @click="cutcount(id)">-</span>	
			</div>
		</div>
	</li>
</template>

<script>
	import {mapMutations,mapState} from "vuex"
	export default {
		name:"cartList",
		props:["amount","id","title","price","img","isSelected","formerPrice","soldAmount","description"],
		methods:{
			...mapMutations(["addcount","cutcount","changeState"])
		}
	}
</script>

<style>
	.cartItemLi{
		width: 50vh;
		min-height: 15vh;
		margin: 2vh auto;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.cartItemLi .cartItemImg{
		width: 16vh;
	}
	.cartItemLi .cartItemImg img{
		width: 100%;
	}
	.cartItemInfo{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
	.cartItemImg{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.amountWraper{
		background-color:#f7f7f7 ;
		height:4vh ;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
	}
	.computedSpan{
		display:inline-block;
		width: 3vh;
		height: 100%;
		line-height: 4vh;
		font-size: 4vh;
	}
	.formerPrice{
		text-decoration: line-through;
		font-size: 2vh
	}
	.price{
		color: red;
	}
	.cartItemInfo{
		width: 20vh;
	}
	.cartItemTitle p{
		margin: 0.8vh 0;
	}
</style>