<template lang="pug">
.run-page
	//- 站点
	template(v-for="(list, prop) in pointDataMap")
		MglMarker(
			v-for="item in list",
			anchor="bottom",
			:coordinates="item.coordinates",
			@click="handleClick(item)")
			BIcon.b-icon-width-line(
				slot="marker",
				:size="56",
				:name="legendConfig[prop].icon + (item.status ? '-' + item.status : '')")
				.overlay-name(v-if="!!legendConfig[prop].showName") {{ item.name }}
	//- 详情图标
	MglMarker(
		:coordinates="detail.coordinates",
		:offset="[0, -110]",
		v-if="showDetail",
		anchor="bottom")
		.popup(slot="marker")
			.close-btn(@click="handleClose")
				BIcon(name="baseline-close-px", :size="20")
			.name {{ detail.name }}
			.detail
				.detail-item(v-for="(item, index) in detail.data", :key="index")
					.detail-item-label(v-if="item.label") {{ item.label }} ：
					.detail-item-value {{ item.value }} {{ item.dw }}
				.operate-btn
					.btn.btn-text(@click="$emit('custom-click', 'service-click1', detail)") 查看详情
	//- 图例
	.legend
		.legend-item(
			v-for="(item, prop) in legendConfig",
			:key="prop",
			v-if="item.showLegend !== false")
			b-icon(:name="item.icon", :size="24")
			.label {{ item.label }}
	//- 热力图
	MglGeojsonLayer(
		type="heatmap",
		:sourceId="layer.source",
		:layerId="layer.id",
		:layer="layer",
		:source="geojson")
</template>
<script lang="ts">
import { MglGeojsonLayer, MglMarker } from 'vue-mapbox'
import BIcon from '../components/b-icon.vue'
export default {
	components: {
		MglMarker,
		MglGeojsonLayer,
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
					serviceZoom: 11,
				}
			},
		},
	},
	data() {
		return {
			geojson: {
				data: {
					type: 'FeatureCollection',
					features: [],
				},
			},
			layer: {
				id: 'heatmap',
				type: 'heatmap',
				source: 'heatmap',
				maxzoom: 18,
				paint: {
					// 使用mag 属性
					'heatmap-weight': [
						'interpolate',
						['linear'],
						['get', 'count'],
						0,
						0,
						4000,
						1,
					],
					'heatmap-intensity': [
						'interpolate',
						['linear'],
						['zoom'],
						0,
						1,
						18,
						3,
					],
					'heatmap-color': [
						'interpolate',
						['linear'],
						['heatmap-density'],
						0,
						'rgba(0,0,0,0)',
						0.3,
						'blue',
						0.4,
						'rgb(117,211,248)',
						0.7,
						'rgb(0, 255, 0)',
						0.8,
						'#ffea00',
						1,
						'red',
					],
					'heatmap-radius': [
						'interpolate',
						['linear'],
						['zoom'],
						0,
						20,
						18,
						80,
					],
					'heatmap-opacity': [
						'interpolate',
						['linear'],
						['zoom'],
						0,
						0,
						18,
						0.8,
					],
				},
			},
			mapConfig: {
				center: [120.18388262, 30.23126455],
				zoom: this.config.serviceZoom || 11,
			},
			showDetail: false,
			detail: {},
			// 点位数据
			pointDataMap: {},
			// 图例配置
			legendConfig: {
				gongsi: {
					icon: 'fuwuwangdian', //图标
					label: '公司',
					showName: false, //地图上是否显示名称
				},
				gongshanghu: {
					icon: 'fuwugongdan',
					label: '工商户',
					showName: false,
				},
				gaozhongyatiaoyazhan: {
					icon: 'kehureli',
					label: '客户热力',
				},
			},
		}
	},
	watch: {
		data: {
			handler(val) {
				if (!val || JSON.stringify(val) === '{}') {
					this.showDetail = false
					this.handleMapFly()
					return false
				}
				let { lng, lat, address, content, time } = val
				let data = {
					coordinates: [lng, lat],
					name: address,
					data: [
						{ label: '发生时间', value: time },
						{ label: '异常类型', value: content },
					],
				}
				this.handleClick(data)
			},
		},
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
		handleClose() {
			this.showDetail = false
			this.handleMapFly()
			this.$emit('custom-click', 'service-click2')
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
			fetch('/yapi/mock/914/hzzh/service/list').then(async res => {
				let data = await res.json()
				this.pointDataMap = data
			})
			// 2.客户热力
			fetch('/yapi/mock/914/hzzh/heatmap').then(async res => {
				let data = await res.json()
				this.geojson.data = data
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
	font-size: 24px;
	font-weight: bold;
	color: #fff;
	white-space: nowrap;
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
	bottom: 73px;
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
