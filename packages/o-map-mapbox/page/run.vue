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
			.close-btn(@click="handleClose")
				BIcon(name="baseline-close-px", :size="20")
			.name {{ detail.name }}
			.detail
				.detail-item(v-for="(item, index) in detail.data", :key="index")
					.detail-item-label {{ item.label }} ：
					.detail-item-value {{ item.value }} {{ item.dw }}
	//- 图例
	.legend
		.legend-item(
			v-for="(item, prop) in legendConfig",
			:key="prop",
			v-if="item.showLegend !== false")
			b-icon(:name="item.icon", :size="24")
			.label {{ item.label }}
	//- 路径规划
	RoutePlan(:points="routePlanDetail.points", :data="routePlanDetail")
</template>
<script lang="ts">
import { MglMap, MglMarker } from 'vue-mapbox'
import BIcon from '../components/b-icon.vue'
import RoutePlan from '../components/route-plan.vue'
export default {
	components: {
		MglMap,
		MglMarker,
		RoutePlan,
		BIcon,
	},
	props:{
		data:{
			type:Object,
			default(){
				return {}
			}
		},
	},
	computed:{
		routePlanDetail(){
			let {lat,lng} = this.data
			return {
				 ...this.data,
				 points:[[lng-0.1*Math.random(),lat-0.1*Math.random()],[lng,lat]]
			}
		}
	},
	data() {
		return {
			mapConfig: {
				center: [120.18388262, 30.23126455],
				zoom: 10,
				pitch: 50,
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
			warnList: [
				{
					content: '新星小区燃气泄漏',
					address: '三墩镇三墩街100号',
					id: 1,
					status: 0,
					timeInSeconds: 1,
					statusText: '已处理',
					lng: 120.0827009281194,
					lat: 30.323955044878687,
					eventType: 1,
				},
				{
					content: '易沙创业园燃气泄漏',
					address: '下沙二号大街九号大街交叉口',
					id: 10,
					status: 1,
					timeInSeconds: 2,
					statusText: '未处理',
					lng: 120.3516411781311,
					lat: 30.31174575966139,
					eventType: 1,
				},
				{
					content: '临平桂花城管道破裂',
					address: '人民大道746号',
					id: 3,
					status: 1,
					timeInSeconds: 3,
					statusText: '未处理',
					lng: 120.31007766723633,
					lat: 30.4205892087966,
					eventType: 0,
				},
				{
					content: '三里亭社区燃气泄漏',
					address: '江干区三里亭东苑11',
					id: 4,
					status: 1,
					timeInSeconds: 4,
					statusText: '未处理',
					lng: 120.19330281642914,
					lat: 30.296621575040618,
					eventType: 1,
				},
				{
					content: '西溪永乐城管道破裂',
					address: '余杭区仓前街道景兴路666号',
					id: 5,
					status: 1,
					timeInSeconds: 5,
					statusText: '未处理',
					lng: 120.00046491622925,
					lat: 30.276487794570983,
					eventType: 0,
				},
				{
					content: '萧山商业城管道破裂',
					address: '商城西路与商惠街交叉路口',
					id: 11,
					status: 0,
					statusText: '已处理',
					timeInSeconds: 6,
					lng: 120.28686046600342,
					lat: 30.169691809970953,
					eventType: 0,
				},
				{
					content: '金色家园管道破裂',
					address: '上城区滨江·金色家园6幢',
					id: 7,
					status: 0,
					statusText: '已处理',
					timeInSeconds: 7,
					lng: 120.17970552712964,
					lat: 30.224503168144224,
					eventType: 0,
				},
				{
					content: '中南购物中心燃气泄漏',
					address: '滨江区江南大道1090号',
					id: 8,
					status: 1,
					statusText: '未处理',
					timeInSeconds: 8,
					lng: 120.18694803585602,
					lat: 30.196626964602952,
					eventType: 1,
				},
				{
					content: '兽王电商产业园燃气泄漏',
					address: '萧山经济技术开发区钱农东路257号',
					id: 6,
					status: 1,
					timeInSeconds: 9,
					statusText: '未处理',
					lng: 120.30192375183105,
					lat: 30.239140930210528,
					eventType: 1,
				},
				{
					content: '羊山公寓管道破裂',
					address: '余杭区羊城路440号',
					id: 2,
					status: 0,
					timeInSeconds: 10,
					statusText: '已处理',
					lng: 119.96636867523192,
					lat: 30.38109446979586,
					eventType: 1,
				},
			],
		}
	},
	created() {
		this.map = this.$parent.map
		//每个页面的center,zoom可能不一致，重置下
		this.resetMap()
		this.getData()
		window.yyy = this
	},
	methods: {
		resetMap() {
			let { center, zoom, pitch } = this.mapConfig
			center && this.map.setCenter(center)
			zoom && this.map.setZoom(zoom)
			pitch && this.map.setPitch(pitch)
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
			fetch('http://yapi.eslink.com/mock/914/hzzh/station/list').then(
				async res => {
					let data = await res.json()
					let {
						menzhan = [],
						yingjizhan = [],
						fuwuwangdian = [],
					} = data || {}
					this.pointDataMap = {
						menzhan,
						yingjizhan,
						fuwuwangdian,
					}
				},
			)
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
