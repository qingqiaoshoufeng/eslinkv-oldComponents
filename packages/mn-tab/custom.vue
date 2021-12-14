<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		class="b-tab-3 fn-flex"
	>
		<div
			v-for="(item, index) in data"
			:key="index"
			:class="{
				active: item.id.indexOf(editor.currentSceneIndex) !== -1,
			}"
			:style="{
				backgroundColor:
					item.id.indexOf(editor.currentSceneIndex) !== -1
						? config.config.activeBgColor
						: '',
				borderColor:
					item.id.indexOf(editor.currentSceneIndex) !== -1
						? config.config.activeBdColor
						: '',
			}"
			@click="change(item.id)"
		>
			<span>{{ item.label }}</span>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Editor } from '@eslinkv/core'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	editor = Editor.Instance()

	change(id) {
		id.length > 0 && this.editor.selectSceneIndex(id[0])
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
