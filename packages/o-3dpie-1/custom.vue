<template lang="pug">
.widget-part(:style="styles")
	.chart(:id="id")
	.legend
		.item(v-for="(k, i) in data.value" :key="i")
			.color(:style="{background: config.config.colorTheme.colorDisk[i]}")
			.name {{k.name}}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'
import { loadJs } from '../../examples/utils'
import options from './options'

@Component
export default class O3DPie1 extends mixins(widgetMixin) {
	timer = null
	
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			this.$nextTick(async () => {
				await loadJs('/cdn/highcharts/highcharts-9.0.1.js', 'Highcharts')
				await loadJs('/cdn/highcharts/highcharts-3d-9.0.1.js', 'highcharts-3d')
				await loadJs('/cdn/highcharts/highcharts-zh_CN.js', 'highcharts-zh_CN')
				if (!val) return
				let each = Highcharts.each
				let round = Math.round
				let cos = Math.cos
				let sin = Math.sin
				let deg2rad = Math.deg2rad
				Highcharts.wrap(
					Highcharts.seriesTypes.pie.prototype,
					'translate',
					function (proceed) {
						proceed.apply(this, [].slice.call(arguments, 1))
						// Do not do this if the chart is not 3D
						if (!this.chart.is3d()) {
							return
						}
						var series = this,
							chart = series.chart,
							options = chart.options,
							seriesOptions = series.options,
							depth = seriesOptions.depth || 0,
							options3d = options.chart.options3d,
							alpha = options3d.alpha,
							beta = options3d.beta,
							z = seriesOptions.stacking
								? (seriesOptions.stack || 0) * depth
								: series._i * depth
						z += depth / 2
						if (seriesOptions.grouping !== false) {
							z = 0
						}
						each(series.data, function (point) {
							var shapeArgs = point.shapeArgs,
								angle
							point.shapeType = 'arc3d'
							var ran = point.options.h
							shapeArgs.z = z
							shapeArgs.depth = depth * 0.75 + ran
							shapeArgs.alpha = alpha
							shapeArgs.beta = beta
							shapeArgs.center = series.center
							shapeArgs.ran = ran
							angle = (shapeArgs.end + shapeArgs.start) / 2
							point.slicedTranslation = {
								translateX: round(
									cos(angle) *
									seriesOptions.slicedOffset *
									cos(alpha * deg2rad),
								),
								translateY: round(
									sin(angle) *
									seriesOptions.slicedOffset *
									cos(alpha * deg2rad),
								),
							}
						})
					},
				)
				;(function (H) {
					H.wrap(
						Highcharts.SVGRenderer.prototype,
						'arc3dPath',
						function (proceed) {
							// Run original proceed method
							var ret = proceed.apply(this, [].slice.call(arguments, 1))
							ret.zTop = (ret.zOut + 0.5) / 100
							return ret
						},
					)
				})(Highcharts)

				const arr = JSON.parse(JSON.stringify(val.value))
				arr.forEach((v, i) => {
					if (i === 0) {
						v.h = 40
					} else {
						v.h = 10
					}
				})
				const chart = Highcharts.chart(this.id, options(val, this.config.config))

				this.timer = setInterval(() => {
					let next
					let seriesData = chart.options.series[0].data
					let index = seriesData.findIndex(v => v.h === 40)
					seriesData[index].h = 10
					if (index === seriesData.length - 1) {
						seriesData[0].h = 40
						next = seriesData[0]
					} else {
						seriesData[index + 1].h = 40
						next = seriesData[index + 1]
					}
					chart.update({
						title: { text: next.y + '%' },
						subtitle: { text: next.name },
						series: seriesData,
					})
				}, 2000)
			})
		}
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig, true)
	}
	
	beforeDestroy () {
		clearInterval(this.timer)
	}
}
</script>
<style lang="scss" scoped>
.widget-part {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.chart{
	width: 240px;
	height: 100%;
}
.legend {
	width: 220px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	.item {
		display: flex;
		align-items: center;
		font-size: 18px;
		color: #fff;
		margin-bottom: 16px;
	}
	.color {
		width: 16px;
		height: 8px;
		margin-right: 8px;
	}
}
</style>
