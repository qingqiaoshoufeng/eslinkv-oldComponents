<template lang="pug">
.service-page
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
	created() {
		this.map = this.$parent.map
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
