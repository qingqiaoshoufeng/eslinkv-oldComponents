import Vue from 'vue'
import VueRouter from 'vue-router'

const routes: Array<any> = []

Vue.use(VueRouter)

const router: any = new VueRouter({
	mode: 'history',
	routes,
})

export default router
