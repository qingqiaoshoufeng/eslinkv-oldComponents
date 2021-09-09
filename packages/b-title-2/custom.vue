<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig" :eventTypes="eventTypes")
	h2(
		:class="{ active: editor.current.currentCreateSceneList.includes(k.sceneId) }"
		v-for="(k, i) in config.config.titles"
		@click="__handleEvent__('click')"
	) {{ k.name }}
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
	editor = Editor.Instance()
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
}
</script>
<style lang="scss" scoped>
.b-title-2 {
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
		margin-top: -13px;
		background-color: #74fff2;
	}
	h2 {
		font-weight: 600;
		font-size: 48px;
		line-height: 48px;
		padding-bottom: 24px;
		padding-left: 10px;
		color: rgba(255, 255, 255, 0.7);
		cursor: pointer;
		position: relative;
		&.active {
			color: #fff;
			&:after{
				position: absolute;
				bottom: -3px;
				left: 0;
				right: 0;
				background: #74FFF2;
				height: 7px;
				content: '';
				display: block;
			}
		}
	}
}
</style>
