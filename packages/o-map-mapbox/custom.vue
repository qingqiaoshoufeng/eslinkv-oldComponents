<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	MglMap(:style="scaleStyle", v-bind="mapConfig")
		RunPage(:style="originStyle")
</template>
<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import BIcon from './components/b-icon.vue'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { loadJs } from '../../js/utils'
import RunPage from './page/run.vue'
import HomePage from './page/home.vue'
@Component({
	components: {
		MglMap,
		MglMarker,
		MglPopup,
		BIcon,
		RunPage,
		HomePage,
		widgetNormal,
	},
})
export default class OMap extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	mapConfig = {
		accessToken:
			'pk.eyJ1IjoibWFua29ybiIsImEiOiJjazU2azBvOXQwM3ZkM25xeDN0MXJiOGxzIn0.Kw_msZgkRreaatBbvPKz9w',
		mapStyle: 'mapbox://styles/mankorn/cku6ih82n3lhw17nzvsrrxxr9',
		center: [120.18388262, 30.23126455],
		zoom: 10,
		// pitch: 50,
		pitch: 0,
	}
	scaleStyle = {}
	originStyle = {}
	async created() {
		await loadJs(
			'//at.alicdn.com/t/font_2864091_tr1kn0594l.js',
			'mapbox_iconfont',
		)
	}
	mounted() {
		let transform = document.defaultView.getComputedStyle(
			document.getElementById('screen'),
			null,
		).transform
		let transformArr = transform.slice(7, -1).split(',')
		let scaleX = Number(transformArr[0]) || 1
		let scaleY = Number(transformArr[3]) || 1
		let { height, width } = this.config.layout.size
		this.originStyle = {
			width: width + 'px',
			height: height + 'px',
			position: 'relative',
			'pointer-events': 'none',
		}
		this.scaleStyle = {
			width: (1 / scaleX) * width + 'px',
			height: (1 / scaleY) * height + 'px',
		}
	}
}
</script>

