<template>
	<div class="box">
		<div class="tabContent">
			<router-view></router-view>
		</div>
		<div class="tab">
			<div class="tabItem" @click="checkTab('index')">
				<img src="../static/index_icon_active.png" v-if="activeIndex == '/index'">
				<img src="../static/index_icon.png" v-else>
				<div class="tabTxt" :class="{'tabTxtSel':activeIndex == '/index'}">首页</div>
			</div>
			<div class="tabItem" @click="checkTab('task_index')">
				<img src="../static/task_icon_active.png" v-if="activeIndex == '/task_index'">
				<img src="../static/task_icon.png" v-else>
				<div class="tabTxt" :class="{'tabTxtSel':activeIndex == '/task_index'}">任务</div>
			</div>
			<div class="tabItem" @click="checkTab('red_package')">
				<img src="../static/hb_icon_active.png" v-if="activeIndex == '/red_package'">
				<img src="../static/hb_icon.png" v-else>
				<div class="tabTxt" :class="{'tabTxtSel':activeIndex == '/red_package'}">红包</div>
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
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display:flex;
	flex-direction: column;
	.tabContent{
		flex:1;
		position: relative;
	}
	.tab{
		border-top:1px solid #E6E6E6; 
		background: #fff;
		width: 100%;
		height: 49px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		.tabItem{
			display:flex;
			flex-direction: column;
			align-items: center;
			img{
				margin-bottom: 4px;
				width: 20px;
				height: 20px;
			}
			.tabTxt{
				font-size: 10px;
				color: #BBBBBB;
			}
			.tabTxtSel{
				color: #1572F9;
			}
		}

	}
}
</style>









