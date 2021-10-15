<template lang="pug">
.run-page
	//- 路径规划箭头图层
	MglGeojsonLayer(
		type="line",
		:sourceId="layer.source",
		:layerId="layer.id",
		:layer="layer",
		:source="geojson")
	//- 路径规划已行驶路径
	MglGeojsonLayer(
		type="line",
		:sourceId="layer2.source",
		:layerId="layer2.id",
		:layer="layer2",
		:source="geojson2")
	//- 路径规划图标
	MglMarker(
		anchor="bottom",
		v-if="markerCoordinates",
		:coordinates="markerCoordinates")
		BIcon.b-icon-width-line(slot="marker", name="xunjianqiangxiuche")
	//- 事件发生位置
	MglMarker(anchor="bottom", v-if="points[1]", :coordinates="points[1]")
		BIcon.b-icon-width-line(slot="marker", name="xunjianqiangxiuche")
</template>
<script lang="ts">
import { MglGeojsonLayer, MglMarker } from 'vue-mapbox'
import BIcon from './b-icon.vue'
import bbox from '@turf/bbox'
import routePlanVue from '../page/route-plan.vue'
export default {
	name: 'RoutePlan',
	components: {
		MglGeojsonLayer,
		MglMarker,
		BIcon,
	},
	props: {
		points: {
			type: Array,
			default() {
				return [
					[118, 30],
					[118.2, 30.1],
				]
			},
		},
	},
	watch: {
		points: {
			immediate: true,
			handler(val) {
				this.clearRoute()
				val && val[1] && this.getRoute()
			},
		},
	},
	data() {
		return {
			markerCoordinates: null,
			geojson: {
				data: {
					type: 'FeatureCollection',
					features: [],
				},
			},
			geojson2: {
				data: {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								coordinates: [],
								type: 'LineString',
							},
						},
					],
				},
			},
			layer: {
				id: 'path1',
				type: 'line',
				source: 'source1',
				paint: {
					'line-width': 12,
					'line-pattern': 'pattern',
				},
			},
			layer2: {
				id: 'path3',
				type: 'line',
				source: 'source2',
				paint: {
					'line-color': '#f2f2f2',
					'line-width': 12,
				},
			},
		}
	},
	created() {
		this._map = this.$parent.map
		this._map.loadImage(require('./arrow.png'), (err, image) => {
			if (err) throw err
			this._map.addImage('pattern', image)
		})
	},
	beforeDestroy() {
		this._map.removeImage('pattern')
		this.clearRoute()
	},
	methods: {
		// 清空路线
		clearRoute() {
			this.geojson = {
				data: {
					type: 'FeatureCollection',
					features: [],
				},
			}
			this.geojson2 = {
				data: {
					type: 'FeatureCollection',
					features: [
						{
							type: 'Feature',
							properties: {},
							geometry: {
								coordinates: [],
								type: 'LineString',
							},
						},
					],
				},
			}
			this.markerCoordinates = null
			this.fetchController && this.fetchController.abort()
			this.animation && cancelAnimationFrame(this.animation)
		},
		getRoute() {
			this.isDraw = false
			const url = 'https://api.mapbox.com/directions/v5/mapbox/driving'
			let origin = String(this.points[0])
			let destination = String(this.points[1])
			var params = {
				alternatives: true,
				geometries: 'geojson',
				steps: false,
				access_token:
					'pk.eyJ1Ijoic3V5YW4iLCJhIjoiY2trN3pyYWd5MGl2aTJucXo4dTN5eWgxZSJ9.ieiSXzlXS112t1jXNfTWzQ',
			}
			let queryString = ''
			Object.keys(params).forEach(prop => {
				queryString += prop + '=' + params[prop] + '&'
			})
			queryString = queryString.slice(0, -1)
			this.fetchController = new AbortController()
			const { signal } = this.fetchController
			fetch(`${url}/${origin};${destination}?${queryString}`, { signal })
				.then(res => res.json())
				.then(res => {
					let path = res.routes[0]
					var geojson = {
						type: 'FeatureCollection',
						features: [],
					}
					var feat = {
						type: 'Feature',
						properties: {},
						geometry: path.geometry,
					}
					geojson.features.push(feat)
					this.geojson.data = Object.freeze(geojson)
					this.setViewFit()
					//路径回放
					setTimeout(() => {
						this.startPoseIndex = 0
						this.endPoseIndex = path.geometry.coordinates.length
						this.routePlayBack()
					}, 2000)
				})
				.catch(err => {
					console.log(err, '取消请求')
				})
		},
		setViewFit() {
			let bound = bbox(this.geojson.data)
			this._map.fitBounds(bound, {
				padding: { top: 100, bottom: 100, left: 200, right: 200 },
			})
		},
		routePlayBack() {
			let { coordinates } = this.geojson.data.features[0].geometry
			if (this.startPoseIndex < this.endPoseIndex / 3) {
				let point = coordinates[this.startPoseIndex]
				this.markerCoordinates = point
				this.geojson2.data.features[0].geometry.coordinates.push(point)
				this.startPoseIndex++
			} else {
				cancelAnimationFrame(this.animation)
			}
			this.animation = requestAnimationFrame(this.routePlayBack)
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
		white-space: nowrap;

		&-item {
			display: flex;
			margin-top: 8px;
			line-height: 34px;

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
