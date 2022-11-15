<template>
	<div class="pa top-0 left-0 width-100 height-100 flex flex-col">
		<page-top title="绑定账号"/>
		<div class="bind_content flex-1 flex flex-col jsb">
			<card-widget>
				<div class="flex" slot="top">
					<div>账号类别：</div>
					<div class="flex ac" @click="show_popup = true">
						<div class="mr5">{{account_list[active_index].name}}</div>
						<img class="down_icon" src="../../static/down_icon.png">
					</div>
				</div>
				<div slot="content">
					<input class="account_input width-100 pl20 pr20 f14" v-model="account" :placeholder="`请输入${account_list[active_index].name}`">
				</div>
			</card-widget>
			<ButtonWidget text="确定" @callback="commitFn"/>
		</div>
		<van-popup v-model="show_popup" round position="bottom">
			<div class="account_item tc f18 dark" :class="{'active_style':index == active_index}" v-for="(item,index) in account_list" @click="checkAccount(index)">{{item.name}}</div>
			<div class="line"></div>
			<div class="account_item tc f18 dark" @click="show_popup = false">取消</div>
		</van-popup>
	</div>
</template>
<script>
	import PageTop from '../../components/pageTop.vue'
	import CardWidget from '../../components/cardWidget.vue'
	import ButtonWidget from '../../components/buttonWidget.vue'
	export default{
		data(){
			return{
				placeholder:"请输入支付宝账号",	//输入框提示
				account:"",						//输入的账号
				show_popup:false,
				account_list:[{
					id:1,
					name:'旺旺号'
				},{
					id:2,
					name:'京东号'
				},{
					id:3,
					name:'抖音号'
				}],								//可选的账号列表
				active_index:0,					//当前选中的账号下标
			}
		},
		methods:{
			//切换账号
			checkAccount(index){
				this.active_index = index;
				this.show_popup = false;
			},
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
.bind_content{
	padding: 18px 10px;
	.down_icon{
		width: 10px;
		height:6px;
	}
	.account_input{
		box-sizing: border-box;
		height: 42px;
		background: #F8F8F8;
		border-radius: 21px;
		border: 1px solid #F1F1F1;
	}	
}
.account_item{
	border-bottom: 1px solid #F2F2F2;
	height:56px;
	line-height: 56px;
}
.active_style{
	color: #9786FF;
}
.line{
	height: 8px;
	background: #F2F2F2;
}
</style>