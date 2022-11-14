<template>
	<div class="box pa top-0 left-0 width-100 height-100 flex flex-col">
		<div class="pr flex-1">
			<router-view></router-view>
		</div>
		<div class="tab flex ac jsa">
			<div class="tabItem flex flex-col ac" @click="checkTab('index')">
				<img src="../static/index_icon_active.png" v-if="activeIndex == '/index'">
				<img src="../static/index_icon.png" v-else>
				<div class="tabTxt black f12">首页</div>
			</div>
			<div class="tabItem flex flex-col ac" @click="checkTab('task_index')">
				<img src="../static/task_icon_active.png" v-if="activeIndex == '/task_index'">
				<img src="../static/task_icon.png" v-else>
				<div class="tabTxt black f12">任务</div>
			</div>
			<div class="tabItem flex flex-col ac" @click="checkTab('red_package')">
				<img src="../static/hb_icon_active.png" v-if="activeIndex == '/red_package'">
				<img src="../static/hb_icon.png" v-else>
				<div class="tabTxt black f12">红包</div>
			</div>
		</div>		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				activeIndex:"/index"
			}
		},
		created(){
			this.activeIndex = this.$route.path;
		},
		watch:{
			$route:function(n){
				this.activeIndex = n.path;
				this.$router.push(n.path);
			}
		},
		methods:{
			//切换导航
			checkTab(tab){
				this.activeIndex = `/${tab}`;
				this.$router.push(`/${tab}`)
				
			}
		}
	}
</script>
<style lang="less" scoped>
.box{
	.tab{
		background: #ffffff;
		width: 100%;
		height: 49px;
		.tabItem{
			img{
				margin-bottom: 4px;
				width: 22px;
				height: 23px;
			}
		}
	}
}
</style>









