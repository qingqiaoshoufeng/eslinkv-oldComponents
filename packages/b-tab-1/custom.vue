<template lang="pug">
widget-normal.b-tab-1.fn-flex(:value="value")
	h2.pos-r.pointer(
		v-for="item in data",
		:class="{ active: item.id.indexOf(editor.currentSceneIndex) !== -1 }",
		@click="change(item.id)") {{ item.label }}
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
.b-tab-1 {
	align-items: center;
	height: 100%;
	h2 {
		font-size: 48px;
		line-height: 48px;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.75);
		margin-right: 215px;
		word-break: break-all;
		white-space: nowrap;
		&:last-child {
			margin-right: 0;
		}
		&.active {
			color: #ffffff;
			font-weight: 600;
			&:before {
				position: absolute;
				content: '';
				bottom: -13px;
				width: 100%;
				height: 6px;
				background: #74fff2;
			}
		}
	}
}
</style>
