<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	ul.list
		li.pointer(
			v-for="(k, i) in config.config.tablist",
			:key="i",
			@click="change(k)",
			:class="{ active: k.value == selectValue }",
			:style="themeStyle"
		)
			span(:class="{ active: k.value == selectValue }") {{ k.name }}
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
	selectValue = this.config.config.defaultValue
	selectLabel = this.config.config.tablist.find(
		item => item.value == this.config.config.defaultValue,
	).name

	themeStyle = {
		background: this.config.config.background,
	}

	change(row) {
		this.selectValue = row.value
		const params = {
			data: this.data,
			statusItem: row,
		}
		this.__handleEvent__('click', params)
	}

	// @Watch('data', { deep: true, immediate: true })
	// onDataChange(val) {
	// 	if (val) {
	// 		val.forEach(item => {
	// 			if (item.value === this.selectValue)
	// 				this.selectLabel = item.label
	// 		})
	// 	}
	// }

	@Watch('config.config.defaultValue', { deep: true })
	onDataChange(val) {
		if (val) {
			this.selectValue = this.config.config.defaultValue
			const item = this.config.config.tablist.find(
				item => item.value === this.selectValue,
			)
			if (item) {
				this.selectLabel = item.name
				const params = {
					data: this.data,
					statusItem: item,
				}
				this.__handleEvent__('click', params)
			}
		}
	}
}
</script>
<style lang="scss" scoped>
.list {
	display: flex;
	height: 100%;
	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 4px 16px;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
		background: #023066;
		border: 1px solid #205a9e;
		border-right-width: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		&:last-child {
			border-right-width: 1px;
		}

		&.active {
			font-weight: 600;
			color: #feffff;
			background: #205a9e;
			border-color: #00ddff;
		}

		&:not(:last-child).active:after {
			content: '';
			display: block;
			background: #00ddff;
			width: 1px;
			position: absolute;
			right: -1px;
			top: -1px;
			bottom: -1px;
			z-index: 2;
		}
		span {
			flex: 1;
		}
	}
}
</style>
