<template lang="pug">
.service-page
	MglMarker(
		anchor="bottom"
		:coordinates="[120.18388262, 30.23126455]",
		@click="handleClick")
		BIcon.b-icon-width-line(slot="marker", name="menzhan")
	//- 详情图标
	MglMarker(
		:coordinates="[120.18388262, 30.23126455]",
		:offset="[0,-110]"
		anchor="bottom",
		@click="handleClick")
		.popup(slot="marker")
			.close-btn
				BIcon(name="baseline-close-px", :size="20")
			div 振宁路
			div 燃气泄漏
</template>
<script lang="ts">
import { MglMap, MglMarker } from 'vue-mapbox'
import BIcon from '../components/b-icon.vue'
export default {
	components: {
		MglMap,
		MglMarker,
		BIcon,
	},
	data() {
		return {
			legendConfig: {
				menzhan: {
					icon: 'menzhan',
					label: '门站',
				},
				yingjizhan: {
					icon: 'yingjizhan',
					label: '应急站',
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
	methods: {
		handleClick() {},
	},
}
</script>

<style lang="scss" scoped>
@import '../assets/common.scss';

.service-page {
	.b-icon {
		position: relative;
	}
}
</style>
