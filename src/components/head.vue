<template>
	<div class="head">
		<a href="/"><img src="../assets/shouye.png" /></a> 
		<mt-search
		  autofocus	
		  v-model="value"
		  cancel-text="取消"
		  placeholder="套装"
		  :result.sync="filterResult"
		  id="headSearch"
		  >		  
		</mt-search>
		<a href="/"><img src="../assets/chat.png"/></a>
	</div>
	
</template>

<script>
	export default{
		name:"commonHeader",
		data() {
		    return {
		      value: '',
		      defaultResult: [
		        '女上衣',
		        '仙女裙',
		        '外套',		        
		        '英伦马丁靴',
		        '男装新款',
		        '哈伦裤子',
		        '破洞牛仔裤',
		        '温暖打底裤',
		        'a字半身裙',
		        '甜美连衣裙',
		        '棒球帽',
		        '渔夫帽',
		        '时尚挎包',
		        '抖音同款挎包',
		        '开衫毛衣',
		        '羽绒服',
		        '雪地靴',
		        '甜美衬衣',
		        '呢子大衣',
		        '内衣',
		        '可爱袜子',
		        '时尚套装',
		        '气质风衣'
		        
		      ]
		    };
		  },
		  computed: {
		    filterResult() {
		      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
		    }
		  }
	}
</script>
	
<style lang="scss">
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	ol, ul {
	list-style: none;
	}
	.head{
		display:flex;
		height: 12vw;
		justify-content: space-around;
		align-items: center;
				
		img{
				width:8vw;
				
			}
		
		#headSearch{
			height: 10vw;
			
			.mint-search-list-warp{
				position: relative;
				z-index: 10;
			}
			.mint-searchbar{
				padding: 0;
				background-color:white;
				
				
				.mint-searchbar-inner{
					/*border: 1px solid red;*/
					border-radius:3vw;
					padding: 2px;
					height: 8vw;					
					background-color: #f4f4f4;
					
				}
				a.mint-searchbar-cancel{
						font-size:14px ;
						
					}
			}
		}	
		
		[type=search]{
			width: 60vw;
			background-color: #f4f4f4;
			height: 7vw;
		}
	}
</style>