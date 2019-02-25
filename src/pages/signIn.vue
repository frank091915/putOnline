<template>
	<div class="signInWraper">
		<div class="signininputwraper">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>				
		</div>
		<button @click="toSignIn">登录</button><button @click="toSignUppage">注册</button>
	</div>

</template>

<script>
	import {mapMutations} from "vuex"
	export default {
		name:"signIn",
		data:function(){
			return {
				username :"",
				email :"",
				password:"",  
				phone:""
			}
		},
		methods:{
			toSignIn(){
				this.$http.toSignIn().then((res)=>{
					if(res.res_code){
						this.changeState();
						window.localStorage.setItem("kkuser",JSON.stringify([{name:res.res_body.data.username,password:this.password}]));
						window.localStorage.setItem("kktoken",JSON.stringify([{token:res.res_body.data.token}]))
						this.$router.push({name:this.$route.params.from.name});
					}
				})
			},
			...mapMutations(["changeState"]),
			toSignUppage(){
				this.$router.push({name:"signUp"})
			}
		}
	}
</script>

<style>
</style>