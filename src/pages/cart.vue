<template>
	<div class="cartpage">
	<h2>购物车</h2>		
	<ul class="cartListView">
		<CartList v-for="item in cart" :key="item.id" v-bind="item"></CartList>
	</ul>
	<div class="computedBox">
		<div class="allSelectedInputWraper">
				<input type="checkbox" :checked="allSelectedInput" @click="ifAllSelected(allSelectedInput)"/>
				<span>全选</span>
		</div>
	
		<div class="computedBottom">
			<p class="computedP"> 总价: <span class="totalPriceSpan">￥{{getTotalPrice.toFixed(2)}}</span></p>	
			<div class="goPay"><span>去结算</span><span>({{getTotalAmount}})</span></div>
		</div>
	</div>

	</div>

</template>

<script>
//	把store中的属性全拿过来,然后在结构赋值给组件的属性
	import {mapMutations,mapActions,mapState,mapGetters} from "vuex"
//	引入cartlist组件
	import CartList from "@/components/cartList"
	export default {
		name:"cart",
		components:{
			CartList
		},
		created(){
			console.log(this)
		},
		methods:{
			...mapMutations(["addcount","cutcount","ifAllSelected"]),
			...mapActions(["asynchadd"])
		},
		data:function(){
			return{

			}
		},
		computed:{
//			从store中获取的数结构计算属性中
			...mapState(["cart"]),
			...mapGetters(["getTotalAmount","getTotalPrice","allSelectedInput"])
		}
	}
</script>

<style>
.cartpage{
	margin-top: 6vh;
}
.cartListView{
	min-height: 80vh;
}
.computedBox{
	position: fixed;
	bottom: 0;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 8vh;
}
.computedBottom{
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.allSelectedInputWraper{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.goPay{
	width: 15vh;
	height: 100%;
	background-color: #e4393c;
	color: white;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.totalPriceSpan{
	color: #e4393c;
}
.allSelectedInputWraper span{
	color: #999;
}
</style>