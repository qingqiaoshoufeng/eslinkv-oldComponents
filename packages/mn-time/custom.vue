<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.hz-time 
		.time(
			:style="{ fontSize: `${config.config.timeFontSize}px`, color: config.config.timeColor }") {{ currentTime }}
		.bar
		.date
			.text(:style="{ fontSize: `${config.config.dateFontSize}px` }") {{ currentYear }}
			span 年
			.text(:style="{ fontSize: `${config.config.dateFontSize}px` }") {{ currentMonth }}
			span 月
			.text(:style="{ fontSize: `${config.config.dateFontSize}px` }") {{ currentDay }}
			span 日
		.week {{ currentWeek }}
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
	weekArr = [
		'星期天',
		'星期一',
		'星期二',
		'星期三',
		'星期四',
		'星期五',
		'星期六',
	]
	currentTime = '00.00.00'
	currentWeek = '星期一'
	currentYear = '2021'
	currentMonth = '12'
	currentDay = '30'
	getTime() {
		var currentDate = new Date()
		this.currentTime =
			this.getFullTime(currentDate.getHours()) +
			':' +
			this.getFullTime(currentDate.getMinutes()) +
			':' +
			this.getFullTime(currentDate.getSeconds())
		this.currentYear = String(currentDate.getFullYear())
		this.currentMonth = this.getFullTime(currentDate.getMonth() + 1)
		this.currentDay = this.getFullTime(currentDate.getDate())
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
	src: url('https://kv-etbc.eslink.com/cdn/meineng/UnidreamLED.ttf');
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
		min-width: 130px;
	}
	.bar {
		width: 1px;
		height: 24px;
		background-color: #ffffff;
		/* margin-right: 26px; */
	}
	.date {
		display: flex;
		justify-content: space-between;
		/* align-items: flex-end; */
		height: 45px;
		line-height: 45px;
		min-width: 220px;
		color: #ffffff;
		.text {
			font-size: 32px;
			// line-height: 45px;
		}
		span {
			line-height: 52px;
		}
	}
	.week {
		font-size: 18px;
		height: 25px;
		line-height: 38px;
	}
}
</style>
