<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.hz-time 
		.time(
			:style="{ fontSize: `${config.config.timeFontSize}px`, color: config.config.timeColor }") {{ currentTime }}
		.date(:style="{ fontSize: `${config.config.dateFontSize}px` }")
			.current-week {{ currentWeek }}
			.current-date {{ currentDate }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	timer = null
	weekArr = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
	currentTime = '00.00.00'
	currentWeek = '周一'
	currentDate = '2021/10/22'
	getTime() {
		var currentDate = new Date()
		this.currentTime =
			this.getFullTime(currentDate.getHours()) +
			':' +
			this.getFullTime(currentDate.getMinutes()) +
			':' +
			this.getFullTime(currentDate.getSeconds())
		this.currentDate =
			currentDate.getFullYear() +
			'/' +
			this.getFullTime(currentDate.getMonth() + 1) +
			'/' +
			this.getFullTime(currentDate.getDate())
		this.currentWeek = this.weekArr[currentDate.getDay()]
	}
	getFullTime(currentTime) {
		return currentTime < 10 ? '0' + currentTime : currentTime
	}
	mounted() {
		this.getTime()
		if (this.timer) clearInterval(this.timer)
		this.timer = setInterval(() => {
			this.getTime()
		}, 1000)
	}
	beforeDestroy() {
		if (this.timer) clearInterval(this.timer)
	}
}
</script>
<style lang="scss" scoped>
@font-face {
	font-family: 'UnidreamLED';
	font-style: normal;
	font-weight: normal;
	src: url('https://kv-etbc.eslink.com/cdn/zhanhui/UnidreamLED.ttf');
}
.hz-time {
	width: 100%;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	color: #ffffff;
	.time {
		font-family: UnidreamLED;
		font-size: 40px;
	}
	.date {
		font-size: 18px;
		opacity: 0.8;
		line-height: 25px;
		text-align: left;
	}
}
</style>
