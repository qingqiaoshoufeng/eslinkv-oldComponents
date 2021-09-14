<template>
	<widget-normal :value="value" class="b-tab-3 fn-flex">
		<div
			v-for="(item, index) in data"
			:key="index"
			:class="{
				active: item.id.indexOf(editor.currentSceneIndex) !== -1,
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
import { value } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
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
		width: 122px;
		height: 74px;
		line-height: 74px;
		word-break: break-all;
		white-space: nowrap;
		text-align: center;
		border: 2px solid #74fff2;
		box-sizing: border-box;
		span {
			font-size: 36px;
			font-weight: 500;
			color: #d2d2d2;
		}
		&.active {
			background: rgba(116, 255, 242, 0.3);
			span {
				color: #fff;
			}
		}
	}
}
</style>
