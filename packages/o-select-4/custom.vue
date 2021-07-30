<template>
	<widget-normal :value="value" :customConfig="customConfig" :eventTypes="eventTypes">
		<div class="o-select-4 fn-flex flex-row pos-r">
			<h2 class="fn-flex flex-row">
				<span
					class="pos-r pointer"
					v-for="item in data ? data : []"
					:class="{ active: selectValue === item.value }"
					@click="change(item)"
				>
					{{ item.label }}
				</span>
			</h2>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component({ components: { widgetNormal } })
export default class OSelect4 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
	selectValue = ''
	selectLabel = ''

	change(row) {
		this.selectValue = row.value
		this.selectLabel = row.label
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
.o-select-4 {
	height: 100%;

	h2 {
		align-items: center;
		justify-content: center;
		font-weight: normal;

		span {
			min-width: 88px;
			padding: 0 8px;
			height: 32px;
			margin-right: 8px;
			font-size: 18px;
			line-height: 32px;
			color: rgba(255, 255, 255, 0.75);
			background: #0057a9;
			border: 1px solid #0057a9;
			border-radius: 4px;
			transition: all 0.3s;

			&:last-child {
				margin-right: 0;
			}

			&.active {
				color: #fff;
				border: 1px solid #0df;
			}
		}
	}
}
</style>
