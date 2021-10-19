<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.hz-weather
		.pic 
			img(src="./sun.svg")
		.status 晴
		.templature {{ temMin }}℃~{{ temMax }}℃
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import request from './request'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	temMin = 14
	temMax = 27
	mounted() {
		this.getDayWeather()
	}
	async getDayWeather() {
		const header = {
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		}

		// const weatherData = await fetch(
		// 	'https://api.seniverse.com/v3/weather/daily.json?key=SwnUsYOzgkEqRNNJV&location=hangzhou&language=zh-Hans&unit=c&start=0&days=1',
		// 	{
		// 		mode: 'no-cors',
		// 	},
		// )
		request({
			url: 'https://api.seniverse.com/v3/weather/daily.json',
			method: 'get',
			params: {
				key: 'SwnUsYOzgkEqRNNJV',
				location: 'hangzhou',
				language: 'zh-Hans',
				unit: 'c',
				start: 0,
				days: 1,
			},
		}).then(res => {
			console.log('res>>>>', res)
		})
	}
}
</script>
<style lang="scss" scoped>
.hz-weather {
	width: 100%;
	height: 100%;
	justify-content: space-between;
	align-items: center;
	font-size: 18px;
	line-height: 25px;
	color: #ffffff !important;
}
</style>
