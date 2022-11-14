<template>
	<div class="page_top flex ac jc pr pl15 pr15">
		<img class="pa back_icon" src="../static/back_icon.png" @click="$router.go(-1)">
		<div class="f16 black bold">{{title}}</div>
	</div>
</template>
<script>
	export default{
		props:{
			//页面标题
			title:{
				type:String,
				default:""
			}
		}
	}
</script>
<style lang="less" scoped>
.page_top{
	background: #ffffff;
	height: 38px;
}
.back_icon{
	left: 15px;
	width:10px;
	height: 18px;
}
</style>