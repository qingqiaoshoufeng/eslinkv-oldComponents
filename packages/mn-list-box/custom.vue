<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig")
	.mn-list-box
		.list-bot.one
		.list-bot.two
		.list-bot.three
		.list-bot.four
		.list-title 
			img(src="./arrow-left.svg")
			.text {{ config.config.title }}
			img(src="./arrow-right.svg")
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
}
</script>
<style lang="scss" scoped>
.mn-list-box {
	width: 100%;
	height: 100%;
	background: rgba(2, 15, 137, 0.5);
	font-weight: 600;
	font-size: 24px;
	color: #ffffff;
	border: 1px solid #00ddff;
	box-sizing: border-box;
	position: relative;
	.list-bot {
		position: absolute;
		&::before {
			position: absolute;
			content: '';
			width: 22px;
			height: 3px;
			top: 0;
			left: 0;
			background: #ffffff;
		}
		&::after {
			position: absolute;
			content: '';
			height: 22px;
			width: 3px;
			top: 0;
			left: 0;
			background: #ffffff;
		}
	}
	.one {
		top: -2px;
		left: -2px;
	}
	.two {
		transform: rotate(90deg);
		top: -2px;
		right: -2px;
	}
	.three {
		transform: rotate(180deg);
		right: -2px;
		bottom: -2px;
	}
	.four {
		transform: rotate(270deg);
		bottom: -2px;
		left: -2px;
	}
	.list-title {
		height: 54px;
		border-bottom: 1px solid #00ddff;
		line-height: 54px;
		display: flex;
		align-items: center;
		justify-content: center;
		.text {
			margin: 16px;
		}
	}
}
</style>
