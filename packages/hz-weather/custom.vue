<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.hz-weather
		.pic 
			img(:src="require(`./white/${codeDay}@1x.png`)")
		.status {{ status }}
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
	status = '阴'
	codeDay = 4
	// mounted() {
	// 	this.getDayWeather()
	// }
	// async getDayWeather() {
	// 	request({
	// 		url: '/xinzhi/v3/weather/daily.json',
	// 		method: 'get',
	// 		params: {
	// 			key: 'SwnUsYOzgkEqRNNJV',
	// 			location: 'hangzhou',
	// 			language: 'zh-Hans',
	// 			unit: 'c',
	// 			start: 0,
	// 			days: 1,
	// 		},
	// 	}).then(res => {
	// 		const { results = [] } = res
	// 		if (results.length) {
	// 			this.temMin = results[0].daily[0].low
	// 			this.temMax = results[0].daily[0].high
	// 			this.status = results[0].daily[0].text_day
	// 			this.codeDay = results[0].daily[0].code_day
	// 		}
	// 	})
	// }
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
