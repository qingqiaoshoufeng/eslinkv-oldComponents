<template lang="pug">
widget-normal.b-title-5.fn-flex(:value="value", :customConfig="customConfig")
	h2 {{ config.config.title }}
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
.b-title-5 {
	align-items: center;
	background: linear-gradient(
		90deg,
		rgba(255, 255, 255, 0.2) 0%,
		rgba(255, 255, 255, 0) 100%
	);
	&:before {
		position: absolute;
		content: '';
		width: 20px;
		height: 100%;
		background: #74fff2;
		left: 0;
	}
	h2 {
		font-weight: 600;
		font-size: 60px;
		line-height: 44px;
		color: #ffffff;
		padding-left: 44px;
	}
}
</style>
