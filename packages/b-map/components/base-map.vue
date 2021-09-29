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
				:options="{ lnglat: iconLayerLnglat }")
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
			v-if="lineReady") 
		slot
	//- 图例
	.legend
		.legend-top
			.legend-top-item
				.box
				span 运行
			.legend-top-item
				.box
				span 服务
		.legend-main
			.lmt
				.item(
					v-for="(legend, prop) in legendTopConfig",
					:key="prop",
					@click="legendClick(prop, 'Top')",
					:class="legend.visible ? '' : 'hide'")
					.line(v-if="legend.color", :style="{ 'border-color': legend.color }")
					b-icon(v-if="legend.icon", :name="legend.icon", :size="22")
					.label {{ legend.label }}
			.lmb
				.item(
					v-for="(legend, prop) in legendBottomConfig",
					:key="prop",
					:class="legend.visible ? '' : 'hide'")
					b-icon(:name="legend.icon", :size="22")
					.label {{ legend.label }}
	//- 地图图层切换
	.layers-radio-group
		.radio(
			:class="curMapLayer === 'TileLayer' ? 'active' : ''",
			@click="changeLayer('TileLayer')")
			.text 二维地图
		//- .radio(
		//- 	:class="curMapLayer === 'ThreeD' ? 'active' : ''",
		//- 	@click="changeLayer('ThreeD')")
		//- 	.text 三维地图
		.radio(
			:class="curMapLayer === 'Satellite' ? 'active' : ''",
			@click="changeLayer('Satellite')")
			.text 卫星地图
</template>
<script>
// import { EsAmap, EsLoca, EsLocaData, EsLocaOption, EsPolygon } from 'es-amap'
import { EsAmap, EsLoca, EsLocaData, EsLocaOption } from 'es-amap'

import EsPathSimplifier from './es-path-simplifier'
import { loadJs } from '../../../examples/utils.js'
import bIcon from '../components/b-icon.vue'
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
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.updateSize)
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
			mapStyle: {},
			curMapLayer: 'TileLayer',
			iconReady: false,
			lineReady: false,
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
			// icon图层 --结束
		}
	},
	methods: {
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
	.legend {
		width: 1410px;
		height: 360px;
		position: absolute;
		bottom: 170px;
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
		bottom: 170px;
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
