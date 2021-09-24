<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	div
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { widgetNormal, widgetNormalMixin } from '@eslinkv/vue2'
import request from './request'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class Widget extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	mounted(): void {
		let redirectLocation = this.config.config.location
		if (this.inPreview && redirectLocation) {
			request({
				url: '/node/etbc/checkLogin',
				method: 'post',
				// headers: {
				// 	'Content-Type': 'application/x-www-form-urlencoded',
				// },
				data: {
					url: redirectLocation,
				},
			}).then(res => {
				if (!res.success) {
					location.href = redirectLocation
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped></style>
