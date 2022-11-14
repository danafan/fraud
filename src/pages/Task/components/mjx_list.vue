<template>
	<div class="flex-1 flex flex-col">
		<div class="tab_row flex jsb mb15">
			<div class="mjx_tab_item tc f14 bold shallow_gray" :class="{'a_style':a_i == index}" v-for="(item,index) in tab_list" @click="a_i = index">{{item}}</div>
		</div>
		<van-list v-model:loading="loading"
		:finished="finished"
		@load="loadMore"
		finished-text="没有更多了" class="list">
		<div class="mjx_item flex flex-col jsb mb10" v-for="item in 5">
			<div class="flex jsb">
				<div class="f14 bold black">一条文艺男</div>
				<div class="f12 dan_gray">一条文艺男</div>
			</div>
			<div class="flex jsb">
				<div class="f12 black">旺旺号</div>
				<div class="look f12 white tc">查看任务</div>
			</div>
		</div>
	</van-list>
</div>
</template>
<script>
	export default{
		data(){
			return{
				tab_list:['待处理','提交中','已拒绝','已完成'],	//tab列表
				a_i:0,			//选中的下标
				loading:false,
				finished:false,
			}
		},
		methods:{
			loadMore(){
				console.log("asdasd")
			}
		},
	}
</script>
<style lang="less" scoped>
.tab_row{
	border-bottom: 1px solid #F4F3FE;
}
.mjx_tab_item{
	width: 84px;
	height: 35px;
	line-height: 35px;
	border-radius: 8px 8px 0px 0px;
}
.a_style{
	color: #ffffff;
	background: #9786FF;
}
.list{
	flex: 1 1 auto;
	height: 0;
	overflow-y: auto;
	.mjx_item{
		padding: 10px 15px;
		width: 351px;
		height: 78px;
		background: linear-gradient(175deg, #FEF7FF 0%, #FFFFFF 100%);
		border-radius: 6px;
		.look{
			width: 74px;
			height: 26px;
			line-height: 26px;
			background: #9786FF;
			border-radius: 13px;
		}
	}
}
</style>