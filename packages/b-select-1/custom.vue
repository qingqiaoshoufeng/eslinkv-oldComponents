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
			:class="{ active: k.value === selectValue }") {{ k.label }}
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class OSelect1 extends mixins(widgetNormalMixin) {
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
	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		padding: 4px 16px;
		font-size: 24px;
		color: #74fff2;
		background: #285066;
		border-right-width: 0;
		&.active {
			font-weight: 600;
			color: #fff;
			border: 1px solid #74fff2;
		}
	}
}
</style>
