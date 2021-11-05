<template lang="pug">
widget-normal.main(:value="value", :customConfig="customConfig")
	.content
		.font-num {{ data.value.toLocaleString() }}
		.unit {{ config.config.unit }}
	.title {{ config.config.title }}
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.main {
	background: url("./img/border.svg") no-repeat;
	background-size: 100% 100%;
	padding: 30px 0 0 87px;
	text-align: left;
	line-height: 1;
	.content {
		display: flex;
		align-items: baseline;
		margin-bottom: 52px;
		color: #fff;
		.font-num {
			font-weight: bold;
			font-size: 144px;
			min-width: 381px;
		}
		.unit {
			font-size: 72px;
			margin-left: 27px;
		}
	}
	.title {
		font-weight: 600;
		font-size: 64px;
		line-height: 64px;
		color: #74FFF2;
	}
}
</style>
