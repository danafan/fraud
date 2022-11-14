<template>
	<div class="card_widget">
		<div class="card_title flex ac">
			<div class="tag_icon mr10"></div>
			<div class="flex-1 f15 black bold">
				<slot name='top'></slot>
			</div>
		</div>
		<div class="card_content">
			<slot name='content'></slot>
		</div>
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="less" scoped>
.card_widget{
	background: #FFFFFF;
	border-radius: 8px;
	.card_title{
		height: 34px;
		border-bottom: 2px solid #F8F8F8;
		.tag_icon{
			width: 3px;
			height: 16px;
			background: #00C693 linear-gradient(203deg, #DCD5FF 0%, #B7ABFF 100%);
			border-radius: 0 3px 3px 0;
		}
	}
	.card_content{
		padding: 15px 10px;
	}
}
</style>