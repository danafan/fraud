<template>
	<div class="pr height-100">
		<img class="page_top_back width-100" src="../../static/page_top_back.png">
		<div class="pa top-0 left-0 width-100 height-100 pl15 pr15">
			<div class="flex ac mt15 mb15">
				<notice-widget class="flex-1"/>
				<div class="ml10 dark bold f16">绑定账号</div>
			</div>
			<img class="banner width-100 mb10" src="../../static/banner.png">
			<div>
				<div class="account_item flex ac pl8 pr8 mb10">
					<img class="account_icon mr8" src="../../static/tb_icon.png">
					<div class="flex-1 black f16 text-overflow">旺旺号:43322</div>
				</div>
				<div class="account_item flex ac pl8 pr8 mb10">
					<img class="account_icon mr8" src="../../static/jd_icon.png">
					<div class="flex-1 black f16 text-overflow">京东账号:43322</div>
				</div>
				<div class="account_item flex ac pl8 pr8 mb10">
					<img class="account_icon mr8" src="../../static/dy_icon.png">
					<div class="flex-1 black f16 text-overflow">抖音账号:43322</div>
				</div>
			</div>
		</div>
		<user-info class="r12 b28"/>
	</div>
</template>
<script>
	import noticeWidget from '../../components/noticeWidget'
	import userInfo from '../../components/userInfo'
	export default{
		components:{
			noticeWidget,
			userInfo
		}
	}
</script>
<style lang="less" scoped>
.page_top_back{
	height: 230px;
}
.account_item{
	height: 58px;
	background: linear-gradient(175deg, #FDEDFF 0%, #FFFFFF 50%, #FFFFFF 100%);
	box-shadow: 0px 4px 8px 0px #F6F0FF;
	border-radius: 8px;
	.account_icon{
		width: 24px;
		height: 22px;
	}
}
</style>