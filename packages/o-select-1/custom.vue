<template lang="pug">
.widget-part(:style="styles", v-if="data")
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
import { widgetMixin } from 'eslinkv-sdk'

@Component
export default class OSelect1 extends mixins(widgetMixin) {
	selectValue = ''
	selectLabel = ''

	change(row) {
		this.selectValue = row.value
		this.__handleClick__(row)
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
					this.__handleClick__(item)
				}
			})
		}
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
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
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
		background: #023066;
		border: 1px solid #205a9e;
		border-right-width: 0;

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
	}
}
</style>
