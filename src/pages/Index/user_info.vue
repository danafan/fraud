<template>
	<div class="pa top-0 left-0 width-100 height-100 flex flex-col">
		<page-top title="个人资料"/>
		<div class="info_content flex-1 flex flex-col jsb">
			<div>
				<card-widget>
					<div class="flex" slot="top">
						<div>手机号</div>
					</div>
					<div slot="content">
						<input class="input width-100 pl20 pr20 f14" v-model="phone" placeholder="请输入手机号">
					</div>
				</card-widget>
				<card-widget>
					<div class="flex" slot="top">
						<div>姓名</div>
					</div>
					<div slot="content">
						<input class="input width-100 pl20 pr20 f14" v-model="name" placeholder="请输入姓名">
					</div>
				</card-widget>
			</div>
			<ButtonWidget text="确定" @callback="commitFn"/>
		</div>
	</div>
</template>
<script>
	import PageTop from '../../components/pageTop.vue'
	import CardWidget from '../../components/cardWidget.vue'
	import ButtonWidget from '../../components/buttonWidget.vue'
	export default{
		data(){
			return{
				phone:"",						//手机号
				name:"",						//姓名
			}
		},
		methods:{
			//点击确定
			commitFn(){

			}
		},
		components:{
			PageTop,
			CardWidget,
			ButtonWidget
		}
	}
</script>
<style lang="less" scoped>
.info_content{
	padding: 18px 10px;
	.input{
		box-sizing: border-box;
		height: 42px;
		background: #F8F8F8;
		border-radius: 21px;
		border: 1px solid #F1F1F1;
	}	
}
</style>