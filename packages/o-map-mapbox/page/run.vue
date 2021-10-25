<template lang="pug">
.run-page
	//- 站点
	template(v-for="(list, prop) in pointDataMap")
		MglMarker(
			v-for="item in list",
			anchor="bottom",
			:coordinates="item.coordinates",
			@click="handleClick(item)")
			BIcon.b-icon-width-line(slot="marker", :name="legendConfig[prop].icon")
				.overlay-name(v-if="!!legendConfig[prop].showName") {{ item.name }}
	//- 详情图标
	MglMarker(
		:coordinates="detail.coordinates",
		:offset="[0, -110]",
		v-if="showDetail",
		anchor="bottom")
		.popup(slot="marker")
			.close-btn(@click="handleClose(false)")
				BIcon(name="baseline-close-px", :size="20")
			.name {{ detail.name }}
			.detail
				.detail-item(v-for="(item, index) in detail.data", :key="index")
					.detail-item-label(v-if="item.label") {{ item.label }} ：
					.detail-item-value {{ item.value }} {{ item.dw }}
				.operate-btn
					.btn.btn-text(@click="$emit('custom-click', 'run-click1', detail)") 查看详情
	//- 图例
	.legend
		.legend-item(
			v-for="(item, prop) in legendConfig",
			:key="prop",
			v-if="item.showLegend !== false")
			b-icon(:name="item.icon", :size="24")
			.label {{ item.label }}
	//- 路径规划
	RoutePlan(
		v-if="routePlanDetail.points",
		:points="routePlanDetail.points",
		@close="handleClose",
		:data="routePlanDetail")
</template>
<script lang="ts">
import { MglMarker } from 'vue-mapbox'
import BIcon from '../components/b-icon.vue'
import RoutePlan from '../components/route-plan.vue'
export default {
	components: {
		MglMarker,
		RoutePlan,
		BIcon,
	},
	props: {
		data: {
			type: Object,
			default() {
				return {}
			},
		},
		config: {
			type: Object,
			default() {
				return {
					runZoom: 11,
				}
			},
		},
	},

	watch: {
		data: {
			handler(val) {
				if (!val || JSON.stringify(val) === '{}') {
					this.routePlanDetail = {}
					this.showDetail = true
					this.handleMapFly()
					return false
				}
				console.log('ssss', val)
				let { lat, lng, content, address, statusText, time } = val || {}
				this.routePlanDetail = {
					...val,
					name: content,
					coordinates: [lng, lat],
					status: statusText === '已处理' ? '' : 'err',
					data: [
						{ label: '', value: address },
						{ label: '发生时间', value: time },
						{ label: '是否处理', value: statusText },
					],
					points: [
						[lng - 0.1 * Math.random(), lat - 0.1 * Math.random()],
						[lng, lat],
					],
				}
			},
		},
	},
	data() {
		return {
			routePlanDetail: {},
			mapConfig: {
				center: [120.18388262, 30.23126455],
				zoom: this.config.runZoom || 11,
			},
			showDetail: false,
			detail: {},
			// 点位数据
			pointDataMap: {},
			// 图例配置
			legendConfig: {
				fuwuwangdian: {
					icon: 'fuwuwangdian',
					label: '公司',
					showName: true, //地图上是否显示名称
					showLegend: false, //在图例上是否展示
				},
				menzhan: {
					icon: 'menzhan',
					label: '门站',
					showName: true,
				},
				yingjizhan: {
					icon: 'yingjizhan',
					label: '应急站',
					showName: true,
				},
				gaozhongyatiaoyazhan: {
					icon: 'gaozhongyatiaoyazhan',
					label: '高中压调压站',
				},
				gaoyaguanwang: {
					icon: 'gaoyaguanwang',
					label: '高压管网',
				},
				zhongyaguanwang: {
					icon: 'zhongyaguanwang',
					label: '中压管网',
				},
				xunjianyinhuandian: {
					icon: 'xunjianyinhuandian',
					label: '巡检隐患点',
				},
				weixiushijian: {
					icon: 'weixiushijian',
					label: '抢维事件',
				},
				gongyibaojing: {
					icon: 'gongyibaojing',
					label: '工艺报警',
				},
				xunjianqiangxiuche: {
					icon: 'xunjianqiangxiuche',
					label: '巡检抢修车',
				},
			},
		}
	},
	created() {
		this.map = this.$parent.map
		//每个页面的center,zoom可能不一致，重置下
		this.resetMap()
		this.getData()
	},
	methods: {
		resetMap() {
			let { center, zoom } = this.mapConfig
			center && this.map.setCenter(center)
			zoom && this.map.setZoom(zoom)
		},

		handleClick(data) {
			this.showDetail = true
			this.detail = data
			this.handleMapFly({
				center: data.coordinates,
				zoom: 15.2,
			})
		},
		handleClose(isEmit = true) {
			this.showDetail = false
			this.handleMapFly()
			isEmit && this.$emit('custom-click', 'run-click2')
		},
		// 地图聚焦
		handleMapFly(data = {}) {
			this.map.flyTo({
				...this.mapConfig,
				...data,
			})
		},
		getData() {
			// 1.站点数据
			fetch('/yapi/mock/914/hzzh/station/list').then(async res => {
				let data = await res.json()
				this.pointDataMap = data
			})
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/common.scss';

.overlay-name {
	position: absolute;
	bottom: -30px;
	left: 50%;
	z-index: 0;
	padding: 4px 8px;
	font-size: 20px;
	font-weight: bold;
	color: #333;
	white-space: nowrap;
	background: #ffdc45;
	border-radius: 5px;
	transform: translateX(-50%);
}

.popup {
	width: 360px;
	padding: 24px;
	border-radius: 16px;

	.name {
		font-size: 32px;
		line-height: 45px;
	}

	.detail {
		font-size: 24px;
		// white-space: nowrap;

		&-item {
			display: flex;
			margin-top: 8px;
			line-height: 34px;

			&-label {
				white-space: nowrap;
			}

			&-value {
				color: yellow;
			}
		}
	}
}

.legend {
	position: absolute;
	right: 649px;
	bottom: 0;
	box-sizing: border-box;
	padding: 16px;
	font-size: 18px;
	color: #fff;
	pointer-events: all;
	background: rgba(0, 0, 0, 0.8);
	border: 1px solid #0065df;
	border-radius: 16px;

	&-item {
		display: flex;
		align-items: center;
		cursor: pointer;
		user-select: none;

		&:not(:last-child) {
			margin-bottom: 16px;
		}

		.label {
			margin-left: 6px;
		}
	}
}
</style>
