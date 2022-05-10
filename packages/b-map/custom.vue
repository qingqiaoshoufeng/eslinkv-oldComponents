<template lang="pug">
widget-normal.pos-r(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	base-map1(
		:lineDataMap="lineDataMap",
		:iconDataMap="iconDataMap",
		:areaDataMap="areaDataMap",
		:mapConfig="mapConfig",
		:legendTopConfig="legendTopConfig",
		:legendBottomConfig="legendBottomConfig",
		:customConfig="innerConfig",
		@icon-click="handleIconClick",
		@icon-hover="handleIconHover",
		@legend-click="handleLegendClick",
		@legend-check="handleLegendCheck"
	)
		//- 覆盖物详情
		es-marker(
			:visible="!!activeOverlay.position",
			anchor="center",
			:scaleRatio="0.5",
			:position="activeOverlay.position"
		)
			.overlay
				.title(
					v-if="activeOverlay.type !== 'gasPressurePoints' && activeOverlay.type !== 'hiddenTroublePoints'"
				) {{ activeOverlay.name }}
				.title(v-if="activeOverlay.type === 'gasPressurePoints'") {{ activeOverlay.address }}
				.title(v-if="activeOverlay.type === 'hiddenTroublePoints'") {{ activeOverlay.hiddenName }}
				//- 鼠标hover仅展示name
				template(v-if="activeOverlay.triggerType !== 'hover'")
					.detail
						.detail-item(
							v-for="(item, prop) in detailMap[activeOverlay.type]",
							:key="prop"
						)
							span {{ item }}:
							span.value {{ activeOverlay[prop] }}{{ activeOverlay.type === 'gasPressurePoints' ? 'KPa' : '' }}
					.operate-btn
						span.more(
							@click="openPressure",
							v-if="activeOverlay.type === 'gasPressurePoints'"
						) 查看详情
					//- 	span.more(@click="openDetail", v-if="activeOverlay.hasArtwork") 查看详情
					//- 	span.more(@click="openRiskDetail", v-else-if="activeOverlay.hasDetail") 查看详情
					//- 	span.more(
					//- 		@click="openUserDetail",
					//- 		v-else-if="activeOverlay.type == 'businessUserPoints' || activeOverlay.type == 'lngUserPoints'") 查看详情
					//- 	span.video(v-if="activeOverlay.hasVideo", @click="openVideo")
					//- 		b-icon(name="icon-shipin", :size="20")
					.close-btn(@click="handleClose")
						b-icon(name="icon-close", :size="20")
				//- 地图外的列表展示
				b-icon.overlay-icon(
					v-if="activeOverlay.custom",
					name="icon-xunjianyinhuanleixing",
					:size="20"
				)
				//- 连接图标的线
				.line
</template>
<script>
import { EsMarker } from 'es-amap'
import { widgetMixin, widgetNormal } from '@eslinkv/vue2'
import { value, customConfig } from './index.component'
// import { legendTopConfig, legendBottomConfig } from './config'
import bIcon from './components/b-icon.vue'
import baseMap1 from './components/base-map1.vue'
import { SCENEINDEXMAP } from './config'

import {
	mapLegend,
	mapLineResult,
	mapPointResult,
	mapStationArea,
	stationPointsDetail,
	pressureCollectDetail,
} from './api/index.ts'
export default {
	name: 'b-map',
	mixins: [widgetMixin],
	components: {
		widgetNormal,
		EsMarker,
		bIcon,
		baseMap1,
	},
	data() {
		return {
			curMapLayer: 'TileLayer',
			eventTypes: [
				{ key: 'click', label: '点击事件' },
				// { key: 'click1', label: '打开视频弹窗' },
				{ key: 'click2', label: '打开巡检隐患弹窗' },
				{ key: 'click3', label: '打开压力监测点趋势' },
			],
			ready: false,
			value,
			customConfig,
			// 图例配置
			legendTopConfig: {},
			legendBottomConfig: {},
			legendData: {},
			legendConfigData: {},
			// 管线信息
			lineDataMap: {},
			iconDataMap: {},
			areaDataMap: {},
			mapConfig: {
				registerConfig: {
					key: '8081bdaac8258a8a4a6244bf16084fed',
					Loca: {
						version: '1.3.2',
					},
					AMapUI: {
						version: '1.1',
						plugins: ['misc/PathSimplifier'],
					},
				},
				zoom: 10,
				center: [118.11304, 39.755102],
				mapStyle: 'amap://styles/ac47cc8f74c19bfe0c78102b50452460',
				// viewMode: '3D', //开启3D视图,默认为关闭
				// buildingAnimation: true, //楼块出现是否带动画
				events: {
					init: map => {
						map.setDefaultCursor('pointer')
						this.$amap = map
						window.sss = map
					},
				},
			},
			activeOverlay: {},
			//站点详情配置
			detailMap: {
				gasPressurePoints: {
					pressureMin: '低压预警值',
					pressureMax: '高压预警值',
					pressure: '压力',
					gasTemperature: '温度',
				},
				// monitor: {
				// 	careLevel: '看护等级',
				// 	careName: '看护人',
				// 	careStartTime: '看护开始时间',
				// 	careEndTime: '看护结束时间',
				// 	careDescription: '看护说明',
				// },
				// devices: {},
				inspectionPersonPoints: {
					// phone: '联系方式',
				},
				inspectionCarPoints: {
					name: '巡检任务名称',
				},
				hiddenTroublePoints: {
					// hiddenLevel: '隐患等级',
					hiddenName: '名称',
					// hiddenStatus: '状态',
					hiddenTime: '时间',
					address: '地址',
				},
				// gatePoints: {
				// 	instantaneousFlow: '瞬时流量',
				// 	totalFlow: '累计流量',
				// 	inPressure: '进口压力',
				// 	inTemperature: '进口温度',
				// },
				// businessUserPoints: {
				// 	thisYear: '今年',
				// 	yesterday: '昨日',
				// 	thisMonth: '本月',
				// },
				// lngUserPoints: {
				// 	thisYear: '今年',
				// 	yesterday: '昨日',
				// 	thisMonth: '本月',
				// },
			},
			arrData: [
				// 'businessUserPoints',
				// 'lngUserPoints',
				// 'gatePoints',
				'gasPressurePoints',
			],
		}
	},
	computed: {
		innerConfig() {
			return this.config.config || {}
		},
	},
	created() {
		this.init()
		// let {
		// 	gaoya,
		// 	zhongya,
		// 	diya,
		// 	gasPressurePoints,
		// 	hiddenTroublePoints,
		// 	inspectionCarPoints,
		// 	inspectionPersonPoints,
		// 	companyPoints,
		// } = this.innerConfig
		// let legendVisMap = {
		// 	gaoya,
		// 	zhongya,
		// 	diya,
		// 	gasPressurePoints,
		// 	hiddenTroublePoints,
		// 	inspectionCarPoints,
		// 	inspectionPersonPoints,
		// 	companyPoints,
		// }
		// Object.keys(legendVisMap).forEach(prop => {
		// 	if (this.legendTopConfig[prop]) {
		// 		this.legendTopConfig[prop].visible = legendVisMap[prop]
		// 	}
		// 	if (this.legendBottomConfig[prop]) {
		// 		this.legendBottomConfig[prop].visible = legendVisMap[prop]
		// 	}
		// })
	},
	async mounted() {
		document.addEventListener('SceneIndex', this.handleSceneChange)
	},
	methods: {
		handleLegendCheck(val) {
			if (val.top && val.bottom) {
				Object.keys(this.legendData.legendTopConfig).map(item => {
					this.legendData.legendTopConfig[item].visible = true
				})
				Object.keys(this.legendData.legendBottomConfig).map(item => {
					this.legendData.legendBottomConfig[item].visible = true
				})
				this.legendTopConfig = JSON.parse(
					JSON.stringify(this.legendData.legendTopConfig),
				)
				this.legendBottomConfig = JSON.parse(
					JSON.stringify(this.legendData.legendBottomConfig),
				)
				this.legendData = JSON.parse(
					JSON.stringify(this.legendConfigData),
				)
			} else {
				if (val.top) {
					for (let item in this.legendData.legendTopConfig) {
						this.legendData.legendTopConfig[item].visible = true
					}
					this.legendTopConfig = JSON.parse(
						JSON.stringify(this.legendData.legendTopConfig),
					)
					this.legendData = JSON.parse(
						JSON.stringify(this.legendConfigData),
					)
				}

				if (!val.top) {
					this.legendTopConfig = JSON.parse(
						JSON.stringify(this.legendData.legendTopConfig),
					)
					this.legendData = JSON.parse(
						JSON.stringify(this.legendConfigData),
					)
				}
				if (val.bottom) {
					for (let item in this.legendData.legendBottomConfig) {
						this.legendData.legendBottomConfig[item].visible = true
					}
					console.log('====================================')
					console.log(this.legendData.legendBottomConfig)
					console.log('====================================')
					this.legendBottomConfig = JSON.parse(
						JSON.stringify(this.legendData.legendBottomConfig),
					)
					this.legendData = JSON.parse(
						JSON.stringify(this.legendConfigData),
					)
				}
				if (!val.bottom) {
					this.legendBottomConfig = JSON.parse(
						JSON.stringify(this.legendData.legendBottomConfig),
					)
					this.legendData = JSON.parse(
						JSON.stringify(this.legendConfigData),
					)
				}
			}
		},
		handleSceneChange(e) {
			const sceneIndexMap = SCENEINDEXMAP
			const { index } = e.detail
			console.log('====================================')
			console.log(e, e.detail, index)
			console.log('====================================')
			const mapConfig = sceneIndexMap[index] || ''
			if (mapConfig === 'unchange') {
				return false
			} else {
				console.log('====================================')
				console.log('需要更改地图获取图例的参数')
				console.log('====================================')
			}
		},
		// 图例
		async legendConfig() {
			let legendConfig = await mapLegend('map1').then(res => {
				this.legendConfigData = JSON.parse(JSON.stringify(res.data))
				return res.data || {}
			})
			this.legendData = JSON.parse(JSON.stringify(legendConfig))
			this.legendTopConfig = JSON.parse(
				JSON.stringify(this.legendData.legendTopConfig),
			)
			this.legendBottomConfig = JSON.parse(
				JSON.stringify(this.legendData.legendBottomConfig),
			)
		},
		// 地图点位
		async mapPoint() {
			let point = await mapPointResult().then(res => {
				return res.data || []
			})
			let iconDataMap = {}
			Object.keys(point).map(prop => {
				iconDataMap[prop] = point[prop].map(item => {
					item.type = prop
					return item
				})
			})
			this.iconDataMap = Object.freeze(iconDataMap)
		},
		// 管线信息  高压、中压、低压
		async mapLine() {
			let gaoya = mapLineResult('high')
			let zhongya = mapLineResult('medium')
			let diya = mapLineResult('low')
			// 市政中压
			let municipal = mapLineResult('municipal')
			// 庭院中压
			let courtyard = mapLineResult('courtyard')
			Promise.all([gaoya, zhongya, diya, municipal, courtyard]).then(
				res => {
					let [res0, res1, res2, res3, res4] = res
					gaoya = res0.data || []
					zhongya =
						res1.data
							.concat(res3.data || [])
							.concat(res4.data || []) || []
					diya = res2.data || []
					this.lineDataMap = Object.freeze({
						gaoya: {
							...this.legendTopConfig.gaoya,
							position: gaoya,
						},
						zhongya: {
							...this.legendTopConfig.zhongya,
							position: zhongya,
						},
						diya: {
							...this.legendTopConfig.diya,
							position: diya,
						},
					})
				},
			)
		},
		async mapArea() {
			let area = await mapStationArea().then(res => {
				return res.data || {}
			})
			this.areaDataMap = Object.freeze(area)
		},
		//获取数据并处理
		init() {
			// 图例
			this.legendConfig()
			//1.icon
			this.mapPoint()
			//定时刷新人，车的位置
			this.timer = setInterval(() => {
				// this.mapPoint()
				this.mapPoint()
			}, 60000)
			//2.line
			this.mapLine()
			//3. area
			// this.mapArea()
		},
		handleIconClick(overlay, triggerType) {
			if (this.arrData.includes(overlay.type)) {
				if (overlay.type === 'gasPressurePoints') {
					pressureCollectDetail(overlay.gatewayDeviceNo).then(res => {
						Object.assign(overlay, res.data)
						this.activeOverlay = overlay
						// this.$amap.setCenter(overlay.position)
					})
				}
				// stationPointsDetail([overlay.type, overlay.stationId]).then(
				// 	res => {
				// 		Object.assign(overlay, res.data)
				// 		this.activeOverlay = overlay
				// 		// this.$amap.setCenter(overlay.position)
				// 	},
				// )
			} else {
				this.activeOverlay = overlay
				// this.$amap.setCenter(overlay.position)
			}
		},
		//鼠标hover展示name
		handleIconHover(data) {
			if (data) {
				data.triggerType = 'hover'
				this.activeOverlay = data
			} else {
				//鼠标移开，判断当时展示为详情则不关闭弹窗
				if (this.activeOverlay.triggerType === 'hover') {
					this.activeOverlay = {}
				}
			}
		},
		handleLegendClick(prop, visible) {
			if (!visible && this.activeOverlay.type === prop) {
				this.activeOverlay = {}
			}
		},
		handleClose() {
			this.activeOverlay = {}
		},
		// 打开压力监测点
		openPressure() {
			debugger
			this.__handleEvent__('click3', this.activeOverlay)
		},
		// //母站打开详情弹窗
		// openDetail() {
		// 	this.__handleClick__({ value: this.activeOverlay })
		// },
		// //巡检隐患打开详情弹窗
		// openRiskDetail() {
		// 	this.__handleEvent__('click2', this.activeOverlay)
		// },
		// // 打开视屏监控
		// openVideo() {
		// 	this.__handleEvent__(
		// 		'click1',
		// 		this.activeOverlay.stationId || this.activeOverlay.name,
		// 	)
		// },
		// //打开管道气、lng用户详情
		// openUserDetail() {
		// 	this.__handleEvent__('click3', this.activeOverlay)
		// },
	},
	watch: {
		data: {
			handler(val) {
				if (this.id && val && !isNaN(val.lon) && !isNaN(val.lat)) {
					const jsons = {
						custom: true,
						type: 'hiddenTroublePoints',
						name: '巡检隐患',
						hasDetail: true,
					}
					Object.assign(val, jsons)

					const position = [Number(val.lon), Number(val.lat)]
					val.position = position

					this.activeOverlay = val
					this.$amap && this.$amap.setCenter(val.position)
				}
			},
			deep: true,
		},
	},
	beforeDestroy() {
		if (this.timer) clearInterval(this.timer)
		document.addEventListener('SceneIndex', this.handleSceneChange)
	},
}
</script>
<style lang="scss" scoped>
.overlay {
	// width: 404px;
	// min-width: 400px;
	min-width: 527px;
	background: #071f36;
	position: relative;
	border: 4px solid #74fff2;
	border-radius: 24px;
	padding: 32px 40px;
	transform: translate(0, calc(-50% - 36px)) !important;
	text-align: left;
	// &::before {
	// 	content: ' ';
	// 	display: block;
	// 	position: absolute;
	// 	top: -1px;
	// 	left: -1px;
	// 	width: 8px;
	// 	height: 8px;
	// 	box-sizing: border-box;
	// 	border-top: 2px solid #fff;
	// 	border-left: 2px solid #fff;
	// }
	// &::after {
	// 	content: ' ';
	// 	display: block;
	// 	position: absolute;
	// 	bottom: -1px;
	// 	right: -1px;
	// 	width: 8px;
	// 	height: 8px;
	// 	box-sizing: border-box;
	// 	border-right: 2px solid #fff;
	// 	border-bottom: 2px solid #fff;
	// }
	.line {
		position: absolute;
		bottom: 0;
		right: 50%;
		transform: translate(50%, 100%);
		// width: 1px;
		// height: 17px;
		width: 0px;
		height: 0px;
		border-top: 20px solid #74fff2;
		border-bottom: 20px solid transparent;
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		// background: #fff;
		// &::after {
		// 	content: ' ';
		// 	display: block;
		// 	position: absolute;
		// 	bottom: 0;
		// 	right: 50%;
		// 	transform: translate(50%, 100%);
		// 	width: 8px;
		// 	height: 8px;
		// 	border-radius: 50%;
		// 	background: #8beaff;
		// 	border: 1px solid #fff;
		// }
	}
	&-icon {
		position: absolute;
		bottom: 0;
		right: 50%;
		transform: translate(50%, calc(100% + 30px));
	}
	.title {
		color: #fff;
		font-weight: 600;
		font-size: 48px;
		line-height: 48px;
	}
	.address {
		font-size: 36px;
	}
	.detail {
		margin-top: 6px;
		&-item {
			font-size: 36px;
			line-height: 36px;
			margin-top: 16px;
			.value {
				margin-left: 8px;
				color: #ffdc45;
			}
		}
	}
	.close-btn {
		top: -52px;
		box-sizing: border-box;
		right: 0;
		position: absolute;
		background: #071f36;
		border: 2px solid #74fff2;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		&:active {
			opacity: 0.8;
		}
	}
	.more {
		vertical-align: middle;
		display: inline-block;
		width: 176px;
		height: 52px;
		text-align: center;
		line-height: 52px;
		margin-top: 10px;
		background: #0057a9;
		// border: 1px solid #8beaff;
		box-sizing: border-box;
		font-size: 36px;
		// border-radius: 4px;
		border-radius: 8px;
		cursor: pointer;
		&:active {
			opacity: 0.6;
		}
	}
	.video {
		vertical-align: middle;
		display: inline-block;
		width: 32px;
		height: 32px;
		background: #3288a4;
		box-sizing: border-box;
		border-radius: 4px;
		cursor: pointer;
		margin-left: 8px;
		position: relative;
		&:active {
			opacity: 0.6;
		}
		> svg {
			position: absolute;
			top: calc(50% - 10px);
			left: calc(50% - 10px);
		}
	}
}
</style>
