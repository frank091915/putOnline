<template>
	<div class="signInWraper">
		<div class="signininputwraper">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
			<mt-field label="邮箱" placeholder="请输入邮箱" type="email" v-model="email"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>				
		</div>
		<button @click="signUp">注册</button>
	</div>
</template>

<script>
	import {mapMutations} from"vuex";
	export default {
		name:"signUp",
		methods:{
			signUp(){
				this.$http.toSignUp().then((res)=>{
					if(res.res_code){
						this.$router.push({name:"signIn",params:{from:{name:"home"}}})
					}
				})
			}
		},
		data:function(){
			return {
				username :"",
				email :"",
				password:"",  
				phone:""
			}
		}
	}
	
</script>

<style>
</style>