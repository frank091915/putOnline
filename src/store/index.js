import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    console.log(state.cart)
    console.log(state.cart.every((curr)=>{return curr.isSelected}))
    if(["","addcount","cutcount","changeState","addcart"].indexOf(mutation.type)){ 

    	window.localStorage.setItem("kkcart",JSON.stringify( state.cart));
    }
    
  })
}

//导出store
export default new Vuex.Store({
	plugins: [myPlugin],
  state: {
    count: 0,
    cart: window.localStorage.getItem("kkcart") ? JSON.parse(window.localStorage.getItem("kkcart")) : [],
    isSigned:false
  },
  getters:{
  	getTotalAmount(state){
  		return state.cart.filter((curr)=>curr.isSelected).reduce((pre,nex)=>{
  			return pre+nex.amount
  		},0)
  	},
  	getTotalPrice(state){
  		return state.cart.filter((curr)=>curr.isSelected).reduce((pre,nex)=>{
  			return parseFloat(pre+nex.price * nex.amount)
  		},0)
  	},
  	allSelectedInput(state){
  		return JSON.parse(window.localStorage.getItem("kkcart")).length ? state.cart.every((curr)=>{return curr.isSelected}) : false
  	}
  },
  mutations: {
  	addcart(state,prod){
//		在加入购物车前,先判断是否已经有了该商品,没有的话就push进数组,有的话就将对象的amount属性加一
						const has=state.cart.some(curr=>curr.id==prod.id)
						if(has){
							state.cart.filter(curr=>{
								if(curr.id==prod.id){
									curr.amount+=1;
									return true
								}
							})
						}else{
									prod.amount=1;
									state.cart.push(prod)
								}
  		console.log(state.cart)
  	},
    addcount(state,itemId){
    	state.cart=state.cart.filter((curr)=>{
    		if(curr.id==itemId){
    			curr.amount++;
    		}
    		return true
    	})
    },
    cutcount(state,itemId){
    	state.cart=state.cart.filter((curr)=>{
    		if(curr.id==itemId){
    			if(curr.amount>1){
    				curr.amount--
    			}
    		}
    		return true
    	})
    },
    changeState(state,id){
    		state.cart.filter((curr)=>{
    			if(curr.id==id){
    				curr.isSelected=!curr.isSelected;
    				return true
    			}
    			return true
    		})
    },
    ifAllSelected(state,currSelected){
    	 state.cart=state.cart.filter((curr)=>{
    		if(1){
    			curr.isSelected=!currSelected;
    			return true
    		}
    		
    	})
    }
  },
  actions:{
  	asynchadd(store){
  		store.commit("addcount")
  	}
  }
})