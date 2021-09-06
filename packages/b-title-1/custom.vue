<template lang="pug">
widget-normal.b-title-1.fn-flex(:value="value", :customConfig="customConfig")
	h2 {{ config.config.title }}
	h3.font-num {{ data[0].toLocaleString() }}
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
.b-title-1 {
	background: linear-gradient(
		90deg,
		rgba(40, 80, 102, 0.5) 0%,
		rgba(40, 80, 102, 0) 100%
	);
	align-items: center;
	padding: 40px;
	h2 {
		font-size: 64px;
		font-weight: normal;
		line-height: 24px;
		color: #fff;
	}
	h3 {
		margin-left: auto;
		color: #74fff2;
		font-size: 72px;
	}
}
</style>
