<template lang="pug">
widget-normal.b-title-6(
	:value="value",
	:customConfig="customConfig")
	h2.pos-a {{ config.config.title }}
	h3.font-num.pos-a {{ data[0].toLocaleString() }}
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
.b-title-6 {
	background: linear-gradient(
		90deg,
		rgba(40, 80, 102, 0.5) 0%,
		rgba(40, 80, 102, 0) 100%
	);
	h2 {
		left: 54px;
		top: 46px;
		font-weight: normal;
		font-size: 64px;
		color: #ffffff;
		line-height: 64px;
		margin-left: 0;
	}
	h3 {
		margin-left: auto;
		font-weight: bold;
		line-height: 144px;
		font-size: 144px;
		color: #74fff2;
		right: 33px;
		bottom: 46px;
	}
}
</style>
