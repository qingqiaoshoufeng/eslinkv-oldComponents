<template lang="pug">
.base-map
	es-amap.base-map-container(v-bind="mapConfig", :style="mapStyle")
		//- line图层
		//- es-loca(v-if="lineReady", v-bind="lineLayerConfig")
		//- 	es-loca-data(
		//- 		:data="lineLayerData",
		//- 		:options="{ lnglat: lineLayerLngLat }")
		//- 	es-loca-option(:options="lineLayerOption")
		//- icon图层
		es-loca(v-if="iconReady", v-bind="iconLayerConfig")
			es-loca-data(
				:data="iconLayerData",
				:options="{ lnglat: iconLayerLnglat }"
			)
			es-loca-option(:options="iconLayerOption")
		//- 站点区域
		//- es-polygon(
		//- 	v-for="(path, station) in areaDataMap",
		//- 	:key="station",
		//- 	fillColor="rgb(96, 230, 255)",
		//- 	strokeColor="#60E6FF",
		//- 	:strokeWeight="2",
		//- 	:fillOpacity="0.3",
		//- 	:path="path")
		es-path-simplifier(
			:stepSpace="customConfig.stepSpace",
			:lineWidth="customConfig.borderWidth",
			:data="lineLayerData",
			v-if="lineReady"
		) 
		slot
	img(
		:src="eyeUrl",
		:style="{ display: 'inline-block' }",
		:class="'legend-eye'",
		@click="switchShow"
	)
	//- 图例
	.legend(v-if="!closeLegend")
		.legend-top
			.legend-top-item
				.box(@click="handleLegendCheck('top')") 
					.box-inner(v-if="checkboxTop")
				span 运行
				//- Checkbox.box(@click="handleLegendCheck('top')") 运行
			.legend-top-item
				.box(@click="handleLegendCheck('bottom')") 
					.box-inner(v-if="checkboxBottom")
				span 服务
				//- Checkbox.box(@click="handleLegendCheck('bottom')") 服务
		.legend-main
			.lmt
				.item(
					v-for="(legend, prop) in legendTopConfig",
					:key="prop",
					@click="legendClick(prop, 'Top')",
					:class="legend.visible ? '' : 'hide'"
				)
					.line(v-if="legend.color", :style="{ 'border-color': legend.color }")
					b-icon(v-if="legend.icon", :name="legend.icon", :size="22")
					.label {{ legend.label }}
			.lmb
				.item(
					v-for="(legend, prop) in legendBottomConfig",
					:key="prop",
					:class="legend.visible ? '' : 'hide'"
				)
					b-icon(:name="legend.icon", :size="22")
					.label {{ legend.label }}
	//- 地图图层切换
	.layers-radio-group(v-if="!closeLegend")
		.radio(
			:class="curMapLayer === 'TileLayer' ? 'active' : ''",
			@click="changeLayer('TileLayer')"
		)
			.text 二维地图
		//- .radio(
		//- 	:class="curMapLayer === 'ThreeD' ? 'active' : ''",
		//- 	@click="changeLayer('ThreeD')")
		//- 	.text 三维地图
		.radio(
			:class="curMapLayer === 'Satellite' ? 'active' : ''",
			@click="changeLayer('Satellite')"
		)
			.text 卫星地图
</template>
<script>
// import { EsAmap, EsLoca, EsLocaData, EsLocaOption, EsPolygon } from 'es-amap'
import { EsAmap, EsLoca, EsLocaData, EsLocaOption } from 'es-amap'
import EsPathSimplifier from './es-path-simplifier'
import { loadJs } from '../../../examples/utils.js'
import bIcon from '../components/b-icon.vue'
const eyeImg =
	'data:image/png;base64,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'
const closeImg =
	'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAmCAYAAABAvVyFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATpSURBVHgB7ZpbdhpHEIb/6iFvsS4rCFpBYAVBO5BXIGkFQsFOHoUeE0s2WoHkFQhWoPEKhFcgsgIQzlPETKeKnpG5zKWH0/iAxHeOLQ7Tc/unu+qvYggbnNHQ304UdC0EBiUE53/Rbq+EDU54p4efAF3X/Jn43whejf/syWfUdX+nhNIJD6gRqP2B3lxhgzXv9Lcz1q45+70H74CiAfc8oPJ9k+6OEO63aHeADZk09L+HhPAmaRvP5hvV0MODaXEFqpSg7rAhk/e6X0kTN0bNixtDlfd6eI0NiYi4Iby8SegrnsapYYC3HW1EnicWl+PrTtoYDd0LEHRUiLCddbCNyNNYijtQCN9KDiOz0/CWhTzIOjAPbD8hOH7NiU8SGhC2ssQVCEH1A+125bOS/0Q4cQ5ZO8kDYNtx/6ful/EKESsmCS1PXC4yjmNxhbHAMivFluWJzAcvs4G+a+h+Da+IqIho5o0TcT/S1s3kdzR/sEceQIfIhZoX9OYcLxhZrQE8yT81i+H+BW3tz35JSSMb+rHJFd0ZLA7qcXiRmhsvDLNKvWtZtQV2m9NDJY26pO0mZ0Kb2VmTkPHHOPi/HCQkkHEKZRRjTo/EGWx6E57M4DoskbIw7iBhTRELplG6Ti++imBCKCWdhH3e7QJPT0TuEfTVBW23sEZMNLuacIiCOpoSWPqZcpI8K5KHCO1BNf+mnz9jxSkea/UpO6423x+HEMrZJ+w8CxxlzAe4xdccNi5p18eKIcKSCYM1m/FS+rJgx5P3km8Gws5zknuCyqzkopMM9LipLCezQm7ijpMGB/5+7vF/BCKsXA+ZRk3Ncjc/QFidnShiBkYI9tL00FC3zzOYy+UjXtpZPQd/ZErlnrlQays3cUITOghPX35kMpQY65mHzSHQWtTxhGKBzm1yCuvBJTSdzO5H0xeh7pPjij5NOgnvU7aLRfNIb4Nr9s//8YNbVn/DxFdZmXS4QF6ZmlA2iIYw5xnE9zSV5IyDkGlN5fgkNjH0d93nbKnOFhE6Po/8VBVi9DUAuosKLjf4E/dM+B4qC4o6nn28b/2Stpwk6EQfLEI/mafQgyXRbD4qGjaS0V0+Ti+E/oetDife0SPX+b14Ky/3HT0Wr7TN7dY9BfpFvKsGlbEgRlhccaxtuVxRBMdEQkt8XqfqjptdQbW1hLyg4JjW+F2AsIn1QpJgGUvAucACV4KfsHZ411GScopzgSO7l+V5/QI+2iV+VgNLKjkObda9F1ucx+CGHj6kl526y3avasYZC8Vjf5NfsLEcRNQ2J67OhH9/9qsJDLjdWHXp0Z0KnPaGS4xUPUmJxCRGsMhK3iz6lUWp8N9Cy5XGq4K67Dy+cpDy0+ye8fveQ5qFk64gW7RjOMKZwHm9jKIXHlVfseiJ1i/6IfYUE8beBvbtdZWRJ9j777vqnziLwaOMLBy9I1Do5yURzNxk6KeNkdkqK6Kob/1Iu1KV+mnbaVyouMGZwCrjBRZpPrdWrBGvMx44Fyx9OMKZwNFP1f7s9zJ7XZWdLpHVwdc29xZptNq+wBFObRonsbfmoqXU1T2xRdLmw4rC7UZpvV5FZbIgbcl9l6vN6QvYUSx07iWXiYiMJV7zUio5l4jdStvG7uIeK87KCyyrIrkCk6Jlq4MVx3kltyyk58zeVXq8A7FnrtuKy+J/dPtipXOQbwoAAAAASUVORK5CYII='
export default {
	name: 'base-map',
	components: {
		EsAmap,
		// EsPolygon,
		EsLoca,
		EsLocaData,
		EsLocaOption,
		EsPathSimplifier,
		bIcon,
	},
	props: {
		mapConfig: {
			type: Object,
			default() {
				return {}
			},
		},
		legendTopConfig: {
			type: Object,
			default() {
				return {}
			},
		},
		legendBottomConfig: {
			type: Object,
			default() {
				return {}
			},
		},
		iconDataMap: {
			type: Object,
			default() {
				return {}
			},
		},
		lineDataMap: {
			type: Object,
			default() {
				return {}
			},
		},
		areaDataMap: {
			type: Object,
			default() {
				return {}
			},
		},
		customConfig: {
			type: Object,
			default() {
				return {
					size: 20,
					selectedSize: 28,
					borderWidth: 6,
				}
			},
		},
	},
	async created() {
		let { size, selectedSize, borderWidth } = this.customConfig
		this.iconLayerOption.style.size = size
		this.iconLayerOption.selectStyle.size = selectedSize
		this.lineLayerOption.style.borderWidth = borderWidth
		await loadJs(
			'//at.alicdn.com/t/font_2801166_0wjqoedfhpq.js',
			'huachen_iconfont',
		)
		setTimeout(() => {
			this.transSVGToBase64()
		}, 0)
	},
	mounted() {
		this.updateSize()
		window.addEventListener('resize', this.updateSize)
		document.addEventListener('SceneIndex', this.handleSceneChange)
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.updateSize)
		document.removeEventListener('SceneIndex', this.handleSceneChange)
	},
	watch: {
		// 地图点位
		iconDataMap: {
			handler(val) {
				if (val && JSON.stringify(val) !== '{}') {
					this.handleIconLayerData()
					this.iconReady = true
				}
			},
			deep: true,
			immediate: true,
		},
		legendTopConfig: {
			handler(val) {
				if (JSON.stringify(this.legendBottomConfig) !== '{}') {
					if (!this.svgFlag) {
						setTimeout(() => {
							this.transSVGToBase64()
						}, 0)
					}
					if (
						!this.lineFlag &&
						JSON.stringify(this.lineDataMap) !== '{}'
					) {
						this.handleLineLayerData()
						this.lineReady = true
					}
					if (
						!this.iconFlag &&
						JSON.stringify(this.iconDataMap) !== '{}'
					) {
						this.handleIconLayerData()
						this.iconReady = true
					}
				}
			},
		},
		legendBottomConfig: {
			handler(val) {
				if (JSON.stringify(this.legendTopConfig) !== '{}') {
					if (!this.svgFlag) {
						setTimeout(() => {
							this.transSVGToBase64()
						}, 0)
					}
					if (
						!this.lineFlag &&
						JSON.stringify(this.lineDataMap) !== '{}'
					) {
						this.handleLineLayerData()
						this.lineReady = true
					}
					if (
						!this.iconFlag &&
						JSON.stringify(this.iconDataMap) !== '{}'
					) {
						this.handleIconLayerData()
						this.iconReady = true
					}
					if (!this.svgFlag) {
						setTimeout(() => {
							this.transSVGToBase64()
						}, 0)
					}
				}
			},
		},
		// 管线
		lineDataMap: {
			handler(val) {
				if (JSON.stringify(val) !== '{}') {
					this.handleLineLayerData()
					this.lineReady = true
				}
			},
			immediate: true,
		},
	},
	data() {
		return {
			eyeUrl: closeImg,
			closeLegend: true,
			lineFlag: false,
			iconFlag: false,
			svgFlag: false,
			mapStyle: {},
			curMapLayer: 'TileLayer',
			iconReady: false,
			lineReady: false,
			legendData: {},
			// 管线图层
			lineLayerConfig: {
				zIndex: 99,
				layerName: 'LineLayer',
				isHideZoomChange: true,
				events: {
					init: layer => {
						this.$nextTick(() => {
							layer.setFitView()
						})
					},
				},
			},
			lineLayerData: [],
			lineLayerOption: {
				style: {
					borderWidth: 6,
					opacity: 1,
					color: v => {
						return v.value.color || '#fff'
					},
				},
			},
			lineLayerLngLat(data) {
				const position = [
					Number(data.value.lon),
					Number(data.value.lat),
				]
				data.value.position = position
				return data.value.position || [0, 0]
				// return data.value.position.nodeList
			},
			// 管线图层 --结束
			// icon图层
			iconLayerConfig: {
				zIndex: 110,
				layerName: 'IconLayer',
				eventSupport: true,
				isHideZoomChange: true,
				events: {
					mouseover: e => {
						this.$emit('icon-hover', e.rawData)
					},
					mouseleave: e => {
						this.$emit('icon-hover')
					},
					click: e => {
						this.$emit('icon-hover')
						this.$emit('icon-click', e.rawData)
					},
				},
			},
			iconLayerLnglat(data) {
				return data.value.position
			},
			iconLayerOption: {
				source: ({ value = {} }) => {
					return this.iconSourceMap[value.type]
				},
				style: {
					size: 28,
				},
				selectStyle: {
					size: 40,
				},
			},
			iconLayerData: [],
			checkboxTop: false,
			checkboxBottom: false,
			// icon图层 --结束
		}
	},
	methods: {
		// 切换
		switchShow() {
			if (this.closeLegend) {
				this.eyeUrl = eyeImg
			} else {
				this.eyeUrl = closeImg
			}
			this.closeLegend = !this.closeLegend
		},
		handleLegendCheck(val) {
			if (val === 'top') {
				this.checkboxTop = !this.checkboxTop
			}
			if (val === 'bottom') {
				this.checkboxBottom = !this.checkboxBottom
			}
			this.$emit('legend-check', {
				top: this.checkboxTop,
				bottom: this.checkboxBottom,
			})
		},
		//获取数据并处理
		legendClick(prop, type) {
			let { visible, layer = '' } = this[`legend${type}Config`][prop]
			// eslint-disable-next-line vue/no-mutating-props
			this[`legend${type}Config`][prop].visible = !visible
			this.$emit('legend-click', prop, !visible)
			// 管线图层
			if (layer === 'line') {
				return this.handleLineLayerData(type)
			}
			// icon图层
			if (layer === 'icon') {
				return this.handleIconLayerData(type)
			}
		},
		// 管线
		handleLineLayerData(type = '') {
			let lineLayerData = []
			if (
				JSON.stringify(this.legendTopConfig) !== '{}' &&
				JSON.stringify(this.legendBottomConfig) !== '{}'
			) {
				this.lineFlag = true
			} else {
				this.lineFlag = false
				return false
			}
			if (!type) {
				// ----------------------------
				// 这里是只有上半部分有线条图例的情况
				// ----------------------------
				Object.keys(this.legendTopConfig)
					.filter(prop => {
						let { layer, visible } = this.legendTopConfig[prop]
						return layer === 'line'
					})
					.forEach(prop => {
						let { visible } = this.legendTopConfig[prop]
						// 管线数据
						let data = this.lineDataMap[prop] || {}
						data.visible = visible
						lineLayerData.push(this.lineDataMap[prop])
					})
				this.lineLayerData = Object.freeze(lineLayerData)
			} else {
				Object.keys(this[`legend${type}Config`])
					.filter(prop => {
						let { layer, visible } =
							this[`legend${type}Config`][prop]
						return layer === 'line'
					})
					.forEach(prop => {
						let { visible } = this[`legend${type}Config`][prop]
						// 管线数据
						let data = this.lineDataMap[prop] || {}
						data.visible = visible
						lineLayerData.push(this.lineDataMap[prop])
					})
				this.lineLayerData = Object.freeze(lineLayerData)
			}
		},
		// 地图点位
		handleIconLayerData(type = '') {
			let iconLayerData = []
			if (
				JSON.stringify(this.legendTopConfig) !== '{}' &&
				JSON.stringify(this.legendBottomConfig) !== '{}'
			) {
				this.iconFlag = true
			} else {
				this.iconFlag = false
				return false
			}
			if (!type) {
				Object.keys(this.legendTopConfig)
					.filter(prop => {
						let { layer, visible } = this.legendTopConfig[prop]
						return (layer === 'icon') & visible
					})
					.forEach(prop => {
						// prop与iconDataMap的key对应
						let data = this.iconDataMap[prop]
						data.map(item => {
							const position = [
								Number(item.lon),
								Number(item.lat),
							]
							item.position = position
							return item
						})
						// let data = this.iconDataMap[prop].map(item => {
						// 	if (item.position) {
						// 	}
						// 	item.position = item.position.map(i => {
						// 		return i.slice(0, 10)
						// 	})
						// 	return item
						// })
						data && iconLayerData.push(...data)
					})
				this.iconLayerData = Object.freeze(iconLayerData)
			} else {
				Object.keys(this[`legend${type}Config`])
					.filter(prop => {
						let { layer, visible } =
							this[`legend${type}Config`][prop]
						return (layer === 'icon') & visible
					})
					.forEach(prop => {
						// prop与iconDataMap的key对应
						let data = this.iconDataMap[prop]
						data.map(item => {
							const position = [
								Number(item.lon),
								Number(item.lat),
							]
							item.position = position
							return item
						})
						// let data = this.iconDataMap[prop].map(item => {
						// 	item.position = item.position.map(i => {
						// 		return i.slice(0, 10)
						// 	})
						// 	return item
						// })
						data && iconLayerData.push(...data)
					})
				this.iconLayerData = Object.freeze(iconLayerData)
			}
		},
		//蒋iconfont的字体图标改为base64位
		transSVGToBase64() {
			let { legendTopConfig, legendBottomConfig } = this
			if (
				JSON.stringify(this.legendTopConfig) !== '{}' &&
				JSON.stringify(this.legendBottomConfig) !== '{}'
			) {
				this.svgFlag = true
			} else {
				this.svgFlag = false
				return false
			}
			let iconSourceMap = {}
			Object.keys(legendTopConfig).forEach(prop => {
				let { icon } = legendTopConfig[prop]
				if (icon) {
					let symbol = document.getElementById(icon)
					if (!symbol) return false
					let svg =
						'<svg  width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">' +
						symbol.innerHTML +
						'</svg>'
					const image64 =
						'data:image/svg+xml;base64,' + window.btoa(svg) //svg内容中不能有中文字符
					iconSourceMap[prop] = image64
				}
			})
			Object.keys(legendBottomConfig).forEach(prop => {
				let { icon } = legendBottomConfig[prop]
				if (icon) {
					let symbol = document.getElementById(icon)
					if (!symbol) return false
					let svg =
						'<svg  width="200" height="200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">' +
						symbol.innerHTML +
						'</svg>'
					const image64 =
						'data:image/svg+xml;base64,' + window.btoa(svg) //svg内容中不能有中文字符
					iconSourceMap[prop] = image64
				}
			})
			this.iconSourceMap = iconSourceMap
		},
		updateSize() {
			let transform = document.getElementById('screen').style.transform
			let { offsetWidth, offsetHeight } = this.$el
			let scaleX = 1
			let scaleY = 1
			if (transform) {
				let start = transform.indexOf('scale(')
				let end = transform.indexOf(')')
				let scaleArr = transform.slice(start + 6, end).split(',')
				scaleX = 1 / (scaleArr[0] || 1)
				scaleY = 1 / (scaleArr[1] || 1)
			}
			let width = offsetWidth / scaleX
			let height = offsetHeight / scaleY
			this.mapStyle = {
				transform: `scale(${scaleX}, ${scaleY}) translate3d(0px, 0px, 0px)`,
				width: width + 'px',
				height: height + 'px',
				position: 'absolute',
				right: 0,
				left: 0,
				top: 0,
				bottom: 0,
				margin: 'auto',
			}
		},
		changeLayer(layerName) {
			if (this.curMapLayer === layerName) {
				return false
			}
			this.curMapLayer = layerName
			let amapRoot = this.$parent.$parent.$amap
			if (amapRoot) {
				//保留loca层
				let layersLoca = amapRoot.getLayers().filter(layer => {
					return (
						layer.CLASS_NAME.indexOf('Loca') > -1 ||
						layer.CLASS_NAME.indexOf('Custom') > -1
					)
				})
				let layer =
					layerName !== 'TileLayer'
						? new AMap.TileLayer[layerName]()
						: new AMap.TileLayer()
				amapRoot.setLayers([layer, ...layersLoca])
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.base-map {
	width: 100%;
	height: 100%;
	font-size: 16px;
	color: #fff;
	position: relative;
	background: #234860;
	&-container {
		width: 100%;
		height: 100%;
	}
	.legend-eye {
		width: 76px;
		height: 52px;
		position: absolute;
		bottom: 40px;
		z-index: 9999;
		left: 28%;
		cursor: pointer;
	}
	.legend {
		min-width: 1000px;
		max-width: 1410px;
		// height: 360px;
		max-height: 500px;
		min-height: 200px;
		position: absolute;
		bottom: 40px;
		left: 50%;
		transform: translateX(-50%);
		white-space: nowrap;
		display: flex;
		border-radius: 24px;
		border: 4px solid #74fff2;
		background: #071f36;
		padding: 27px 0;
		user-select: none;
		.legend-top {
			width: 190px;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.legend-top-item {
				font-size: 24px;
				line-height: 24px;
				color: #ffffff;
				display: flex;
				align-items: center;
				&:first-child {
					margin-bottom: 40px;
				}
				.box {
					margin-right: 32px;
					border: 2px solid #74fff2;
					width: 25px;
					height: 25px;
					cursor: pointer;
					// .box-inner {
					// 	width: 20px;
					// 	height: 20px;
					// 	background-color: #74fff2;
					// }
					// /deep/.ivu-checkbox-checked .ivu-checkbox-inner:after {
					// 	display: none;
					// }
					// /deep/.ivu-checkbox {
					// 	width: 25px;
					// 	height: 25px;
					// 	.ivu-checkbox-inner {
					// 		width: 25px;
					// 		height: 25px;
					// 		border: none !important;
					// 		background-color: transparent;
					// 	}
					// }
				}
				.box-inner {
					width: 12px;
					height: 12px;
					margin-top: 4px;
					margin-left: 4px;
					background-color: #74fff2;
				}
			}
		}
		.legend-main {
			flex: 1;
			border-left: 4px dashed rgba(255, 255, 255, 0.5);
			padding: 0 40px;
			.lmt {
				display: flex;
				flex-wrap: wrap;
				padding-bottom: 17px;
			}
			.lmb {
				display: flex;
				flex-wrap: wrap;
				padding-top: 35px;
				border-top: 4px dashed rgba(255, 255, 255, 0.2);
			}
			.item {
				height: 40px;
				align-items: center;
				display: flex;
				cursor: pointer;
				&:active,
				&.hide {
					opacity: 0.6;
				}
				.line {
					width: 40px;
					height: 0px;
					border: 12px solid;
				}
				.label {
					font-size: 24px;
					line-height: 24px;
					margin-left: 16px;
					display: inline-block;
				}
				margin-right: 36px;
				// &:not(:first-of-type) {
				// 	margin-left: 16px;
				// }
			}
		}
	}
	.layers-radio-group {
		position: absolute;
		right: 940px;
		bottom: 40px;
		> .radio {
			width: 224px;
			height: 100px;
			background: #071f36;
			border: 4px solid #74fff2;
			border-radius: 24px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 36px;
			line-height: 36px;
			opacity: 0.5;
			cursor: pointer;
			&:not(:last-child) {
				margin-bottom: 24px;
			}
			&:hover,
			&.active {
				opacity: 1;
			}
		}
	}
}
</style>
<style lang="scss">
.base-map-container {
	> div {
		height: 100%;
	}
}
.amap-logo,
.amap-copyright {
	display: none !important;
}
.amap-container {
	background: transparent !important;
}
//内部做了偏移，防止遮挡
.amap-marker {
	pointer-events: none;
	.amap-marker-content {
		pointer-events: none;
		.overlay {
			pointer-events: all !important;
		}
		svg {
			pointer-events: all !important;
		}
	}
}
</style>
