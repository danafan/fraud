<template>
	<div class="button_widget width-100 tc f15 white" @click="$emit('callback')">
		{{text}}
	</div>
</template>
<script>
	export default{
		props:{
			//按钮文字
			text:{
				type:String,
				default:''
			}
		}
	}
</script>
<style lang="less" scoped>
.button_widget{
	height: 46px;
	line-height: 46px;
	background: #9786FF;
	border-radius: 23px;
}
</style>