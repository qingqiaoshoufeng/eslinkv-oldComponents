<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		class="b-tab-3 fn-flex"
	>
		<div
			v-for="(item, index) in data"
			:key="index"
			:class="[
				{
					active: item.key == active,
				},
				'pointer',
			]"
			:style="{
				backgroundColor:
					item.key == active ? config.config.activeBgColor : '',
				borderColor:
					item.key == active ? config.config.activeBdColor : '',
			}"
			@click="change(item)"
		>
			<span>{{ item.label }}</span>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Editor } from '@eslinkv/core'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	active = 'nav1'
	editor = Editor.Instance()

	change(item) {
		if (item.id.length > 0) {
			;(window.eslinkV.Editor.prototype as any).openWithClose.call(
				this.editor,
				item.id[0],
			)
			this.active = item.key
		}
	}
	@Watch('config.config.defaultValue', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.active = this.config.config.defaultValue
		}
	}
}
</script>
<style lang="scss" scoped>
.b-tab-3 {
	height: 100%;
	div {
		width: 72px;
		height: 36px;
		line-height: 34px;
		word-break: break-all;
		white-space: nowrap;
		text-align: center;
		border: 1px solid #0057a9;
		box-sizing: border-box;
		span {
			font-size: 20px;
			color: rgba(255, 255, 255, 0.75);
		}
		&.active {
			background: #0057a9;
			border: 1px solid #00ddff;
			span {
				font-weight: 600;
				color: #fff;
			}
		}
	}
}
</style>
