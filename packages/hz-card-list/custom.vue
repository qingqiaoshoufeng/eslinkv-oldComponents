<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.hz-card-list 
		.list-item(v-for="(item, index) in dataList", :key="index")
			.title-bar
				.title {{ item.title }}
				.point {{ item.point }}
			.error 
				span 异常：
				span {{ item.error }}
			.time 
				span 时间：
				span {{ item.time }}
</template>
<script>
import { value, customConfig } from './index.component'
import { widgetMixin, widgetNormal } from '@eslinkv/vue2'
export default {
	mixins: [widgetMixin],
	components: {
		widgetNormal,
	},
	data() {
		return {
			value: value,
			customConfig: customConfig,
			timer: null,
			dataList: [
				{
					title: '进站压力（Mpa）',
					point: '0.325',
					error: '压力过低',
					time: '11-03  08:23:27',
				},
				{
					title: '出站压力（Mpa）',
					point: '3.12',
					error: '压力过高',
					time: '11-03  08:23:27',
				},
				{
					title: '进站瞬间流量（m³/h）',
					point: '72',
					error: '流量过高',
					time: '11-03  08:23:27',
				},
				{
					title: '出站瞬间流量（m³/h）',
					point: '0.325',
					error: '流量过高',
					time: '11-03  08:23:27',
				},
				{
					title: '进站温度（°C）',
					point: '65',
					error: '流量过高',
					time: '11-03  08:23:27',
				},
			],
		}
	},
	methods: {
		getTime() {
			let currentTimeMS = +new Date()
			let timeMS
			// 两天今天日期，剩下日期往前推
			this.dataList.forEach((item, index) => {
				timeMS =
					currentTimeMS -
					1000 * 60 * 60 * 24 * (index == 1 ? 0 : index) -
					Math.random() * 1000 * 60 * 60 * 12
				item.time = this.getTimeByMillisecond(timeMS)
			})
		},
		getTimeByMillisecond(number) {
			const time = new Date(number)
			const currentTime =
				this.getFullTime(time.getHours()) +
				':' +
				this.getFullTime(time.getMinutes()) +
				':' +
				this.getFullTime(time.getSeconds())
			const currentDate =
				this.getFullTime(time.getMonth() + 1) +
				'-' +
				this.getFullTime(time.getDate())
			return currentDate + ' ' + currentTime
		},

		getFullTime(currentTime) {
			return currentTime < 10 ? '0' + currentTime : currentTime
		},
	},
	mounted() {
		this.getTime()
		if (this.timer) clearInterval(this.timer)
		this.timer = setInterval(() => {
			this.getTime()
		}, 1000 * 60 * 60 * 12)
	},
	beforeDestroy() {
		if (this.timer) clearInterval(this.timer)
	},
}
</script>
<style lang="scss" scoped>
.hz-card-list {
	width: 100%;
	height: 100%;
	overflow: hidden;
	.list-item {
		margin-bottom: 8px;
		height: 124px;
		background: rgba(16, 31, 66, 0.4);
		backdrop-filter: blur(10px);
		border-radius: 4px;
		padding: 15px 16px;
		.title-bar {
			height: 32px;
			display: flex;
			justify-content: space-between;
			padding: 0 8px;
			align-items: center;
			background: linear-gradient(
				90deg,
				#003369 0%,
				rgba(0, 51, 105, 0) 100%
			);
			border-radius: 2px;
			.title {
				font-weight: 500;
				font-size: 18px;
				line-height: 25px;
				display: flex;
				align-items: center;

				color: #feffff;
			}
			.point {
				font-family: 'font-num';
				font-weight: bold;
				font-size: 20px;
				line-height: 23px;
				text-align: right;

				/* 提醒/警示 */

				color: #e5615b;
			}
		}
		.error,
		.time {
			position: relative;
			height: 20px;
			line-height: 20px;
			padding-left: 24px;
			font-size: 14px;
			line-height: 20px;
			display: flex;
			align-items: center;
			color: rgba(255, 255, 255, 0.75);
			:nth-child(2) {
				margin-left: 6px;
			}
			::before {
				content: '';
				display: inline-block;
				width: 6px;
				height: 6px;
				background: #00a3ff;
				border-radius: 1px;
				position: absolute;
				top: 50%;
				left: 8px;
				margin-top: -3px;
			}
		}
		.error {
			margin-top: 13px;
			:nth-child(2) {
				font-weight: 500;
				color: #ffffff;
			}
		}
		.time {
			margin-top: 10px;
		}
	}
}
</style>
