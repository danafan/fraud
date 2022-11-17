<template>
	<div class="notice flex ac pl10 pr10 f12 black" @click="$router.push('/notice_list')">
		<img class="notice_icon mr5" src="../static/notice_icon.png">
		<div class="flex-1 text-overflow">近期将进行维护，造成的不便请谅解</div>
		<img class="right_arrow ml5" src="../static/right_arrow.png">
	</div>
</template>
<script>
	export default{

	}
</script>
<style lang="less" scoped>
.notice{
	background: rgba(255,255,255,0.4);
	height: 36px;
	border-radius: 18px;
	.notice_icon{
		width: 20px;
		height: 20px;
	}
	.right_arrow{
		width: 12px;
		height: 12px;
	}
}
</style>