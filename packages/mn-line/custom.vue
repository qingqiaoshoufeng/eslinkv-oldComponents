<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig")
	.mn-line(
		:style="{ backgroundColor: config.config.color, borderWidth: `${config.config.border}px` }")
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	isActive = this.config.config.defaultValue
	editor = Editor.Instance()
}
</script>
<style lang="scss" scoped>
.mn-line {
	position: relative;
	width: 100%;
}
</style>
