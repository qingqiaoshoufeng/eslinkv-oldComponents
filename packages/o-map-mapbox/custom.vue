<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	MglMap(:style="scaleStyle", v-bind="mapConfig")
		component(
			:is="currentPageName",
			@custom-click="handleCustomClick",
			:data="data",
			:config="config.config",
			:style="originStyle")
</template>
<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import { MglMap, MglMarker } from 'vue-mapbox'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import BIcon from './components/b-icon.vue'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { loadJs } from '../../js/utils'
import RunPage from './page/run.vue'
import ServicePage from './page/service.vue'
import ProjectPage from './page/project.vue'
import HomePage from './page/home.vue'
@Component({
	components: {
		MglMap,
		MglMarker,
		BIcon,
		RunPage,
		ServicePage,
		HomePage,
		ProjectPage,
		widgetNormal,
	},
})
export default class OMap extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	currentPageName = 'RunPage'
	eventTypes = [
		{ key: 'run-click1', label: '运行-查看详情' },
		{ key: 'run-click2', label: '运行-关闭弹窗' },
		{ key: 'service-click1', label: '服务-查看详情' },
		{ key: 'service-click2', label: '服务-关闭弹窗' },
		{ key: 'project-click1', label: '工程-查看详情' },
		{ key: 'project-click2', label: '工程-关闭弹窗' },
	]
	mapConfig = {
		accessToken:
			'pk.eyJ1IjoibWFua29ybiIsImEiOiJjazU2azBvOXQwM3ZkM25xeDN0MXJiOGxzIn0.Kw_msZgkRreaatBbvPKz9w',
		mapStyle: 'mapbox://styles/mankorn/cku6ih82n3lhw17nzvsrrxxr9',
		center: [120.18388262, 30.23126455],
		zoom: 11,
		pitch: this.config.config.pitch || 60,
	}
	scaleStyle = {}
	originStyle = {}
	async created() {
		await loadJs(
			'//at.alicdn.com/t/font_2864091_trvhksikvre.js',
			'mapbox_iconfont',
		)
	}
	handleCustomClick(eventName, data) {
		this.__handleEvent__(eventName, data)
	}
	mounted() {
		let transform = document.defaultView.getComputedStyle(
			document.getElementById('screen'),
			null,
		).transform
		// let transformArr = transform.slice(7, -1).split(',')
		// let scaleX = Number(transformArr[0]) || 1
		// let scaleY = Number(transformArr[3]) || 1
		// let { height, width } = this.config.layout.size
		// this.originStyle = {
		// 	width: width + 'px',
		// 	height: height + 'px',
		// 	position: 'relative',
		// 	'pointer-events': 'none',
		// }
		// if (scaleX > 1) {
		// 	scaleX = 1
		// }
		// if (scaleY > 1) {
		// 	scaleY = 1
		// }
		// this.scaleStyle = {
		// 	width: (1 / scaleX) * width + 'px',
		// 	height: (1 / scaleY) * height + 'px',
		// }
		document.addEventListener('SceneIndex', this.handleSceneChange)
	}
	handleSceneChange(e) {
		const { run, home, service, project } = this.config.config
		const { index } = e.detail
		let sceneIndexMap = {
			[home]: 'HomePage',
			[run]: 'RunPage',
			[project]: 'ProjectPage',
			[service]: 'ServicePage',
		}
		this.currentPageName = sceneIndexMap[index] || 'RunPage'
	}
	beforeDestroy() {
		document.removeEventListener('SceneIndex', this.handleSceneChange)
	}
}
</script>

<style lang="scss">
.mapboxgl-control-container {
	display: none;
}
</style>
