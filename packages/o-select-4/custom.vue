<template>
	<div class="widget-part pos-r" :style="styles" v-if="data">
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
	</div>
</template>
<script lang="ts">
import { customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'
import { value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'

@Component
export default class Widget extends mixins(widgetMixin) {
	selectValue = ''
	selectLabel = ''

	change(row) {
		this.selectValue = row.value
		this.selectLabel = row.label
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
			this.__handleClick__({
				value: this.selectValue,
				label: this.selectLabel,
			})
			this.data.forEach(item => {
				if (item.value === this.selectValue)
					this.selectLabel = item.label
			})
		}
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
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
			width: 88px;
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
