<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.box(@click="__handleEvent__('click')")
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig, eventTypes } from './index.component'
@Component({
	components: {
		widgetNormal,
	},
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	eventTypes = eventTypes
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.box {
	width: 100%;
	height: 100%;
}
</style>
