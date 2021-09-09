<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig")
	h2 {{ config.config.title }}
	.b-title-2-line-left.pos-a
	.b-title-2-line-right.pos-a
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
}
</script>
<style lang="scss" scoped>
.b-title-2 {
	align-items: center;
	padding: 40px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	.b-title-2-line-left {
		width: 35px;
		height: 3px;
		left: 0;
		bottom: -2px;
		background-color: #fff;
	}
	.b-title-2-line-right {
		width: 35px;
		height: 3px;
		right: 0;
		bottom: -2px;
		background-color: #fff;
	}
	&:before {
		position: absolute;
		content: '';
		width: 16px;
		height: 16px;
		transform: rotate(45deg);
		left: 0;
		top: 50%;
		margin-top: -9px;
		background-color: #74fff2;
	}
	h2 {
		font-weight: 600;
		font-size: 48px;
		line-height: 80px;
		color: #fff;
		padding-left: 10px;
	}
}
</style>
