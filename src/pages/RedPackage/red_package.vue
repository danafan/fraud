<template>
	<div class="pr height-100">
		<img class="page_top_back width-100" src="../../static/page_top_back.png">
		<div class="pa top-0 left-0 width-100 height-100 pl15 pr15 flex flex-col">
			<div class="dark f18 bold mt20 mb20">红包</div>
			<van-list v-model:loading="loading"
			:finished="finished"
			@load="loadMore"
			finished-text="没有更多了" class="list">
			<div class="hb_item flex ac jsb mb10" v-for="item in 5">
				<div class="height-100 flex flex-col jsa">
					<div class="f14 black">订单号：43454322456</div>
					<div class="flex ac">
						<div class="f14 black">红包金额：</div>
						<div class="p_c f14">¥</div>
						<div class="p_c f18 pr price">78</div>
					</div>
				</div>
				<img class="lhb_icon" src="../../static/lhb_icon.png">
			</div>
		</van-list>
		<!-- 领取弹窗 -->
		<div class="model_box pf top-0 left-0 width-100 height-100 flex flex-col ac jc" v-if="show_model">
			<div class="model pr">
				<img class="close_icon pa" src="../../static/close_icon.png" @click="show_model = false">
				<div class="model_title pa left-0 width-100 tc f14 p_c bold">红包金额</div>
				<div class="money pa left-0 width-100 tc f46 p_c bold">100.00</div>
				<div class="commit_get pa tc f14 p_c bold" @click="commitGet">确认领取</div>
				<img class="red_package pa top-0 left-0 width-100 height-100" src="../../static/red_package.png">
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				loading:false,
				finished:false,
				show_model:true,
			}
		},
		methods:{
			loadMore(){
				console.log("asdasd")
			},
			commitGet(){

			}
		},
		components:{
			
		}
	}
</script>
<style lang="less" scoped>
.page_top_back{
	height: 230px;
}
.list{
	flex: 1 1 auto;
	height: 0;
	overflow-y: auto;
	.hb_item{
		padding: 10px 15px;
		height: 75px;
		background: #FFFFFF;
		box-shadow: 0px 0px 5px 0px #EBEBF5;
		border-radius: 13px;
		.lhb_icon{
			width: 28px;
			height: 28px;
		}
		.price{
			left: 2px;
			bottom: 1px;
		}
	}
}
.model_box{
	background: rgba(0,0,0,.5);
	.model{
		width: 276px;
		height: 293px;
		.close_icon{
			top: -37px;
			right: -25px;
			width: 25px;
			height: 25px;
		}
		.model_title{
			top: 22px;
			z-index: 9;
		}
		.money{
			top: 82px;
			z-index: 9;
		}
		.commit_get{
			bottom: 20px;
			left: 50%;
			transform: translate(-50%);
			width: 166px;
			height: 42px;
			line-height: 42px;
			background: #ECEBFF;
			border-radius: 21px;
			z-index: 9;
		}
	}
}
</style>