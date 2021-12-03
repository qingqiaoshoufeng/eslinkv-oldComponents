<template lang="pug">
widget-normal.b-tab-2.fn-flex(:value="value", :customConfig="customConfig")
	h2.pos-r.pointer(v-for="item in data", @click="change(item.id)") {{ item.label }}
	.b-title-2-line-left.pos-a
	.b-title-2-line-right.pos-a
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	editor = Editor.Instance()
	// timer = null

	mounted() {
		// this.changeTab()
	}

	// 每5秒切换场景一次
	// changeTab() {
	// 	this.timer = setInterval(() => {
	// 		let scene = this.data.filter(prop => {
	// 			if (prop.id !== this.editor.currentSceneIndex) {
	// 				return prop
	// 			}
	// 		})
	// 		this.editor.selectSceneIndex(scene[0].id)
	// 	}, 5000)
	// }

	change(id) {
		this.editor.selectSceneIndex(id)
	}

	// beforeDestroy() {
	// 	if (this.timer) clearInterval(this.timer)
	// }
}
</script>
<style lang="scss" scoped>
.b-tab-2 {
	align-items: center;
	padding: 40px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	.b-title-2-line-left {
		width: 35px;
		height: 3px;
		left: 0;
		bottom: -2px;
		background-color: #fff;
	}
	.b-title-2-line-right {
		width: 35px;
		height: 3px;
		right: 0;
		bottom: -2px;
		background-color: #fff;
	}
	&:before {
		position: absolute;
		content: '';
		width: 16px;
		height: 16px;
		transform: rotate(45deg);
		left: 0;
		top: 50%;
		margin-top: -9px;
		background-color: #74fff2;
	}
	h2 {
		font-weight: 700;
		font-size: 48px;
		line-height: 48px;
		color: rgba(255, 255, 255, 1);
		padding-left: 10px;
		margin-right: 35px;

		&.active {
			font-weight: 600;
			color: #ffffff;
			&:before {
				position: absolute;
				content: '';
				bottom: -18px;
				width: 100%;
				height: 6px;
				background: #74fff2;
			}
		}
	}
}
</style>
