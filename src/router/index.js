import Vue from 'vue'
import Router from 'vue-router'

const tab_bar = resolve=>System.import('@/pages/tab_bar')
const index = resolve=>System.import('@/pages/Index/index')
const bind_account = resolve=>System.import('@/pages/Index/bind_account')
const task_index = resolve=>System.import('@/pages/Task/task_index')
const red_package = resolve=>System.import('@/pages/RedPackage/red_package')

Vue.use(Router);

const router = new Router({
	routes: [
	{
		path: '/tab_bar',
		name:"导航",
		component: tab_bar,
		children:[
		{path: '/index',name:"首页",component: index},
		{path: '/task_index',name:"任务",component: task_index},
		{path: '/red_package',name:"红包",component: red_package},
		]
	},
	{path: '/bind_account',name:"绑定账号",component: bind_account},
	]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

export default router;
