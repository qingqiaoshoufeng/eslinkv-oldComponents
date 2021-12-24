<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	.o-zhuxing-2(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { value, customConfig } from './index.component.ts'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options.ts'
import { getAllInfo } from './api.ts'
import shanxi from './mapData/shanxi.json'
import baoji from './mapData/baoji.json'
import hancheng from './mapData/hancheng.json'
import shenmu from './mapData/shenmu.json'
@Component({ components: { widgetNormal } })
export default class extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
	currentCompanyInfo = ''
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				if (!(data.area && data.point)) return
				window.echarts.registerMap('bj', data.area)
				this.instance = window.echarts.init(
					document.getElementById(this.id),
				)
				this.setOption(data, this.config.config)
			})
		}
	}
	mounted() {
		this.handleSceneChange()
		window.addEventListener('opencenceListChange', this.handleSceneChange)
	}
	async handleSceneChange() {
		debugger
		let isChange =
			JSON.parse(sessionStorage.getItem('insertParams'))[0].value !==
			this.currentCompanyInfo

		if (isChange) {
			this.currentCompanyInfo = JSON.parse(
				sessionStorage.getItem('insertParams'),
			)[0].value
			const areaMap = {
				'0049': shanxi, //美能总公司
				'004901': hancheng, //韩城市美能
				'004902': shenmu, //神木市美能
				'004903': baoji, //宝鸡市美能
			}
			const centerMap = {
				'0049': '美能公司',
				'004901': '韩城公司',
				'004902': '神木公司',
				'004903': '宝鸡公司',
			}
			this.data = await getAllInfo().then(res => {
				debugger
				const [data1] = res
				const point = data1.data
				this.config.config.centerCompany =
					centerMap[this.currentCompanyInfo]
				this.data = {
					point,
					area: areaMap[this.currentCompanyInfo],
				}
			})
		}
	}
	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}
}
</script>
<style lang="scss" scoped>
.o-zhuxing-2 {
	height: 100%;
}
.chart_tooltip {
	padding: 6px 14px;
	font-family: PingFang HK;
	font-style: normal;
	font-weight: normal;
	font-size: 24px;
	line-height: 34px;
	background: rgba(0, 26, 119, 0.8);
	/* 主色调/主色 */

	border: 1px solid #00ddff;
	box-sizing: border-box;
	border-radius: 4px;
}
</style>
