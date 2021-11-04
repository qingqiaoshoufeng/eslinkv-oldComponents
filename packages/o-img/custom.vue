<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig" :eventTypes="eventTypes")
	img(:src="config && config.config.img" @click="__handleEvent__('click')")
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class OBar2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
}
</script>
<style lang="scss" scoped>
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
