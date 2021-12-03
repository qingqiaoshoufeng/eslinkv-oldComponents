<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		:eventTypes="eventTypes"
	>
		<div class="o-select-3 fn-flex" :style="themeStyle">
			<div class="select-box">
				<h2
					class="fn-flex flex-row"
					@click="showOptions = !showOptions"
					:class="{ active: showOptions }"
				>
					<span>{{ selectLabel }}</span>
					<img src="./select.svg" />
				</h2>
			</div>
			<ul
				class="pos-a d-scrollbar"
				v-if="showOptions"
				:class="{ active: showOptions }"
				:style="themeStyle"
			>
				<li
					class="pointer"
					v-for="(item, index) in config.config.selectList"
					@click="change(item)"
					:key="index"
				>
					{{ item.label }}
				</li>
			</ul>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { customConfig, eventTypes } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'

@Component({ components: { widgetNormal } })
export default class extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	eventTypes = eventTypes
	showOptions = false
	selectValue = this.config.config.defaultValue
	selectLabel = this.config.config.selectList.find(
		item => item.value == this.config.config.defaultValue,
	).label
	themeStyle = {
		background: this.config.config.background,
	}
	change(row) {
		this.selectValue = row.value
		this.selectLabel = row.label
		this.__handleEvent__('click1', row)
		this.showOptions = !this.showOptions
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

	@Watch('config.config.defaultValue')
	onDataChange(val) {
		if (val) {
			const { defaultValue, selectList } = this.config.config
			this.selectValue = defaultValue
			selectList.forEach(item => {
				if (item.value === this.selectValue) {
					this.selectLabel = item.label
					this.__handleEvent__('click1', item)
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
	.select-box {
		height: 100%;
		width: 100%;
		display: flex;
	}
	ul {
		top: 100%;
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
			flex: 3;
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
