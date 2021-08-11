<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	h2.fn-flex(
		@click="__handleEvent__('click')",
		:style="{ backgroundColor: config.config.backgroundColor, color: config.config.color }") {{ config.config.title }}
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig, eventTypes } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class OBar2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	eventTypes = eventTypes
}
</script>
<style lang="scss" scoped>
h2 {
	color: #fff;
	background-color: #1c4fe8;
	height: 100%;
	width: 100%;
	align-items: center;
	justify-content: center;
}
</style>
