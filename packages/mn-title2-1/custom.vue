<template lang="pug">
widget-normal.b-tab-2.fn-flex(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	h2.pos-r.pointer(
		v-for="item in data",
		@click="change(item)",
		:class="{ active: item.key == active }"
	) {{ item.label }}
	.b-title-2-line-left.pos-a
	.b-title-2-line-right.pos-a
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
	active = 'nav1'
	customConfig = customConfig
	editor = Editor.Instance()
	// timer = null
	eventTypes = [{ key: 'click', label: '点击事件' }]
	change(item) {
		this.active = item.key
		this.__handleEvent__('click', item)
	}
	@Watch('config.config.defaultValue', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.active = this.config.config.defaultValue
			const item = this.data.find(
				item => item.key === this.config.config.defaultValue,
			)
			this.__handleEvent__('click', item)
		}
	}
}
</script>
<style lang="scss" scoped>
.b-tab-2 {
	align-items: center;
	padding-left: 20px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	.b-title-2-line-left {
		width: 16px;
		height: 1px;
		left: 0;
		bottom: 0px;
		background-color: #fff;
	}
	.b-title-2-line-right {
		width: 16px;
		height: 1px;
		right: 0;
		bottom: 0px;
		background-color: #fff;
	}
	&:before {
		position: absolute;
		content: '';
		width: 8px;
		height: 8px;
		transform: rotate(45deg);
		left: 0;
		top: 50%;
		margin-top: -4px;
		background-color: #00ddff;
	}
	h2 {
		font-weight: normal;
		font-size: 20px;
		// line-height: 28px;
		color: rgba(255, 255, 255, 0.75);
		margin-right: 8px;
	}
	.active {
		font-weight: 600;
		font-size: 24px;
		// line-height: 34px;
		padding-bottom: 3px;
		color: #ffffff;
		&:before {
			position: absolute;
			content: '';
			bottom: -8px;
			width: 100%;
			height: 2px;
			background: #00ddff;
		}
	}
}
</style>
