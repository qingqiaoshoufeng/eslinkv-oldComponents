<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.o-map-gaode(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class OLine2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	mapLoader(plugins, key, version) {
		return new Promise((resolve, reject) => {
			if (window.AMap) {
				resolve({ AMap: window.AMap, AMapUI: window.AMapUI })
			} else {
				window.initAMapUI = () => {
					resolve({ AMap: window.AMap, AMapUI: window.AMapUI })
				}
				window.initAMap = () => {
					const script = document.createElement('script')
					script.async = true
					script.src = '//webapi.amap.com/ui/1.1/main.js?v=1.1.1'
					script.onload = initAMapUI
					script.onerror = reject
					document.head.appendChild(script)
				}
				const script = document.createElement('script')
				script.async = true
				script.src = `//webapi.amap.com/maps?v=${version}${plugins}&callback=initAMap&key=${key}`
				script.onerror = reject
				document.head.appendChild(script)
			}
		})
	}

	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.mapLoader(val.mapPlugins, val.mapKey, val.mapVersion).then(
				({ AMap, AMapUI }) => {
					this.map = new AMap.Map(this.id, {
						zoom: val.zoom,
						center: val.center,
						mapStyle: val.mapStyle,
					})
				},
			)
		}
	}

	
}
</script>
<style lang="scss" scoped>
.o-map-gaode {
	height: 100%;
}
</style>
