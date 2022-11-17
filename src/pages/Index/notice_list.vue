<template>
	<div class="pa top-0 left-0 width-100 height-100 flex flex-col">
		<page-top title="公告"/>
		<van-list v-model:loading="loading" :finished="finished" @load="loadMore" finished-text="没有更多了" class="scroll-y flex-1">
			<div class="notice_item" v-for="item in 5">
				<div class="f14 shallow_gray mb10">2019-07-21 12:45:44</div>
				<div class="f14 black">旺旺号1有任务可以进行操作了，请前往订单查看，请
					前往订单查看，请前往订单查看，请前往订单查看请前
				往订单查看，请前往订单查看</div>
			</div>
		</van-list>
	</div>
</template>
<script>
	import PageTop from '../../components/pageTop.vue'
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
			},
		},
		components:{
			PageTop
		}
	}
</script>
<style lang="less" scoped>
.notice_item{
	padding: 10px;
	border-bottom: 1px solid #E8E8E8;
}
</style>