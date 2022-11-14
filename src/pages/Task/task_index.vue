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
				<task-list v-if="active_tab == 'task'"/>
				<mjx-list v-if="active_tab == 'mjx'"/>
			</div>
		</div>
	</div>
</template>
<script>
	import noticeWidget from '../../components/noticeWidget'
	import taskList from './components/task_list.vue'
	import mjxList from './components/mjx_list.vue'
	export default{
		data(){
			return{
				active_tab:'task',		//默认选中的tab
				loading:false,
				finished:false,
			}
		},
		methods:{
			loadMore(){
				console.log("asdasd")
			}
		},
		components:{
			noticeWidget,
			taskList,
			mjxList
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

</style>