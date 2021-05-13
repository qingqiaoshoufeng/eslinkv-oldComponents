<template lang="pug">
.widget-part(:style="styles", v-if="data")
	ul.list
		li(
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
export default class OSelect2 extends mixins(widgetMixin) {
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
				if (item.value === this.selectValue)
					this.selectLabel = item.label
			})
			this.__handleClick__({
				value: this.selectValue,
				label: this.selectLabel,
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
		padding: 4px 0;
		margin-right: 16px;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);

		&.active {
			font-weight: 600;
			color: #feffff;
			border-bottom: 2px solid #00ddff;
		}
	}
}
</style>
