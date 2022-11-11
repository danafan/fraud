<template>
	<div class="pr height-100">
		<img class="page_top_back width-100" src="../../static/page_top_back.png">
		<div class="pa top-0 left-0 width-100 height-100 pl15 pr15 flex flex-col">
			<notice-widget class="mt15 mb15"/>
			<div class="flex-1 flex flex-col">
				<div class="flex mb10">
					<div class="tab_item pr flex flex-col ac mr30" @click="active_tab = 'task'">
						<div class="f18 shallow_gray" :class="{'active_text':active_tab == 'task'}">任务</div>
						<div class="active_line pa bottom-0" v-if="active_tab == 'task'"></div>
					</div>
					<div class="tab_item pr flex flex-col ac" @click="active_tab = 'mjx'">
						<div class="f18 shallow_gray" :class="{'active_text':active_tab == 'mjx'}">买家秀</div>
						<div class="active_line pa bottom-0" v-if="active_tab == 'mjx'"></div>
					</div>
				</div>
				<div class="flex-1 flex flex-col list">
					<div class="task_item pl15 pr15">
						<div class="flex ac jsb mt15 mb15">
							<div class="flex">
								<img class="ww_icon mr10" src="../../static/tb_icon.png">
								<div class="black f16">旺旺号:43322</div>
							</div>
							<div class="f14 p_c">接单</div>
						</div>
						<div class="line mb15"></div>
						<div class="goods_item flex mb15">
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
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import noticeWidget from '../../components/noticeWidget'
	export default{
		data(){
			return{
				active_tab:'task',		//默认选中的tab
			}
		},
		components:{
			noticeWidget
		}
	}
</script>
<style lang="less" scoped>
.page_top_back{
	height: 230px;
}
.tab_item{
	height:34px;
}
.active_text{
	font-size: 18px;
	font-weight: bold;
	color: #000000;
}
.active_line{
	width: 20px;
	height: 4px;
	background: #000000;
	border-radius: 3px;
}
.list{
	border:1px solid red;
	.task_item{
		background: linear-gradient(175deg, #FCD9FF 0%, #FFFFFF 54%, #FFFFFF 100%);
		box-shadow: 0px 4px 8px 0px #F6F0FF;
		border-radius: 8px;
		.ww_icon{
			width: 24px;
			height: 22px;
		}
		.line{
			height: 1px;
			border: 1px solid #F4F3FE;
		}
		.goods_item{
			height:74px;
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

}
</style>