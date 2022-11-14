<template>
	<div class="flex-1 flex flex-col">
		<van-list v-model:loading="loading"
		:finished="finished"
		@load="loadMore"
		finished-text="没有更多了" class="list">
		<div v-for="item in 5">
			<div class="task_item pl15 pr15 pt5 mb10 pr">
				<div class="flex ac jsb mt15 mb15">
					<div class="flex">
						<img class="ww_icon mr10" src="../../../static/tb_icon.png">
						<div class="black f16">旺旺号:43322</div>
					</div>
					<!-- <div class="f14 p_c">已接单</div> -->
					<div class="get_button f14 p_c bold">接单</div>
				</div>
				<div class="goods_item flex pt12 pb12">
					<div class="goods_img mr10"></div>
					<div class="goods_content flex-1 flex as flex-col jsb f14">
						<div class="black text-overflow">文艺男女店立领羽绒服男装冬季保暖</div>
						<div class="shallow_gray">任务编号：1234333</div>
						<div class="width-100 flex ac jsb">
							<div class="dan_gray">2022-12-12 15:33</div>
							<div class="pink bold">待审核</div>
						</div>
					</div>
				</div>
				<div class="goods_item flex pt12 pb12">
					<div class="goods_img mr10"></div>
					<div class="goods_content flex-1 flex as flex-col jsb f14">
						<div class="black text-overflow">文艺男女店立领羽绒服男装冬季保暖</div>
						<div class="shallow_gray">任务编号：1234333</div>
						<div class="width-100 flex ac jsb">
							<div class="dan_gray">2022-12-12 15:33</div>
							<div class="pink bold">待审核</div>
						</div>
					</div>
				</div>
			</div>
			<div class="get_content pr pl15 pr8 flex flex-col jsc">
				<div class="flex ac jsb mb15">
					<div class="f14 black bold">您接到一个新的任务订单</div>
					<div class="get_task task_botton f14 white bold tc">接受任务</div>
				</div>
				<div class="flex ac jsb">
					<div class="flex ac f14">
						<div class="black">任务结束倒计时：</div>
						<div class="pink">05：00</div>
					</div>
					<div class="jj_task task_botton f14 p_c bold tc">拒绝任务</div>
				</div>
			</div>
		</div>

	</van-list>
</div>
</template>
<script>
	export default{
		data(){
			return{
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
.list{
	flex: 1 1 auto;
	height: 0;
	overflow-y: auto;
	.task_item{
		background: linear-gradient(170deg, #FEF0FF 0%, #FEF0FF 0%, #FFFFFF 50%, #FFFFFF 100%);
		box-shadow: 0px 4px 8px 0px #F6F0FF;
		border-radius: 8px;
		z-index: 9;
		.get_button{
			width: 70px;
			text-align: center;
			height: 28px;
			line-height: 28px;
			background: #F7F5FF;
			border-radius: 14px;
			border: 1px solid #9786FF;
		}
		.ww_icon{
			width: 24px;
			height: 22px;
		}
		.goods_item{
			border-top: 1px solid #F4F3FE;
			height:98px;
			.goods_img{
				border:1px solid red;
				border-radius: 8px;
				width: 74px;
				height:74px;
			}
			.goods_content{
				height:74px;
			}
		}
	}
	.get_content{
		left: 8px;
		top:-17px;
		width: 343px;
		height: 102px;
		background: #FFFFFF;
		box-shadow: 0px 4px 8px 0px #F6F0FF;
		border-radius: 8px;
		.task_botton{
			width: 92px;
			height: 28px;
			line-height: 28px;
			border-radius: 14px;
		}
		.get_task{
			background: #9786FF;
		}
		.jj_task{
			background: #FFFFFF;
			border: 1px solid #9786FF;
		}
	}
}
</style>