<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		:eventTypes="eventTypes"
	>
		<div class="o-select-3 fn-flex flex-row pos-r">
			<h2
				class="fn-flex flex-row"
				@click="showOptions = !showOptions"
				:class="{ active: showOptions }"
			>
				<span>{{ selectLabel }}</span>
				<img src="./select.svg" />
			</h2>
			<ul
				class="pos-a d-scrollbar"
				v-if="showOptions"
				:class="{ active: showOptions }"
			>
				<li
					class="pointer"
					v-for="item in data ? data : []"
					@click="change(item)"
				>
					{{ item.label }}
				</li>
			</ul>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'

@Component({ components: { widgetNormal } })
export default class extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
	showOptions = false
	selectValue = ''
	selectLabel = ''

	change(row) {
		this.selectValue = row.value
		this.selectLabel = row.label
		this.__handleEvent__('click', row)
		this.showOptions = !this.showOptions
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
.o-select-3 {
	height: 100%;
	background: #0057a9;
	border-radius: 4px;

	ul {
		top: 32px;
		right: 0;
		width: 100%;
		background: #0057a9;
		border-radius: 4px;

		&.active {
			height: auto;
			max-height: 207px;
			padding: 8px 0;
			overflow-y: auto;
			border: 1px solid #0df;
		}
	}

	h2 {
		align-items: center;
		width: 100%;
		font-weight: normal;
		color: #fff;
		border-radius: 4px;

		&.active {
			border: 1px solid #0df;
		}

		span {
			margin-right: auto;
			margin-left: 8px;
			font-size: 20px;
			line-height: 20px;
		}

		img {
			margin-right: 8px;
		}
	}

	li {
		height: 40px;
		padding-right: 8px;
		font-size: 20px;
		line-height: 40px;
		color: #fff;
		transition: all 0.3s;

		&:hover {
			background: rgba(0, 221, 255, 0.5);
		}

		&.active {
			background: rgba(0, 221, 255, 0.5);
		}

		&:last-child {
			border-bottom: none;
		}
	}
}
</style>
