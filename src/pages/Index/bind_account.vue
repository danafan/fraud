<template>
	<div class="pa top-0 left-0 width-100 height-100 flex flex-col">
		<page-top title="绑定账号"/>
		<div class="bind_content flex-1 flex flex-col jsb">
			<card-widget>
				<div class="flex" slot="top">
					<div>账号类别：</div>
					<div class="flex ac">
						<div class="mr5">支付宝号</div>
						<img class="down_icon" src="../../static/down_icon.png">
					</div>
				</div>
				<div slot="content">123123123</div>
			</card-widget>
			<div>asd</div>
		</div>
	</div>
</template>
<script>
	import PageTop from '../../components/pageTop.vue'
	import CardWidget from '../../components/cardWidget.vue'
	export default{
		components:{
			PageTop,
			CardWidget
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
}
</style>