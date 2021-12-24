<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	ul.list
		li.pointer(
			v-for="(k, i) in data",
			:key="i",
			@click="change(k)",
			:class="{ active: k.value === selectValue }",
			:style="{ padding: `${config.config.padding}px 0`, fontSize: `${config.config.fontSize}px` }") {{ k.label }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { mixins } from 'vue-class-component'

@Component({ components: { widgetNormal } })
export default class OSelect2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
	selectValue = ''
	selectLabel = ''

	change(row) {
		this.selectValue = row.value
		this.__handleEvent__('click', row)
	}

	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			val.forEach(item => {
				if (item.value === this.selectValue)
					this.selectLabel = item.label
			})
		}
	}

	@Watch('config.config.defaultValue', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.selectValue = this.config.config.defaultValue
			this.data.forEach(item => {
				if (item.value === this.selectValue) {
					this.selectLabel = item.label
					this.__handleEvent__('click', item)
				}
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.list {
	display: flex;
	justify-content: space-between;
	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		padding: 4px 0;
		font-size: 16px;
		line-height: 22px;
		color: #ffffff;

		&.active {
			font-weight: 600;
			// color: #feffff;
			border-bottom: 3px solid #00ddff;
		}
	}
}
</style>
