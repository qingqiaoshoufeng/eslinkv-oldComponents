<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.active-data
		.label
			.left-label 
				.squire
				.text {{ config.config.label1 }}
			.right-label
				.squire
				.text {{ config.config.label2 }}
		.bar
			.left-bar(
				:style="{ width: `${(data.value1 / (data.value2 + data.value1)) * 100}%` }")
			.right-bar(
				:style="{ width: `${(data.value2 / (data.value2 + data.value1)) * 100}%` }")
		.number
			.left-number {{ data.value1 }}
			.right-number {{ data.value2 }}
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
.active-data {
	width: 100%;
	height: 100%;
	padding: 8px;
	background: rgba(0, 87, 169, 0.5);
	.label {
		display: flex;
		justify-content: space-between;
		padding: 0 16px;
		height: 20px;
		line-height: 20px;
		color: #ffffff;
		.squire {
			position: absolute;
			width: 8px;
			height: 8px;
		}
		.left-label {
			position: relative;
			.squire {
				top: 50%;

				left: -16px;
				background: linear-gradient(
					90deg,
					#00ddff -0.03%,
					#745eff 98.58%
				);
				margin-top: -4px;
				transform: rotate(-180deg);
			}
		}
		.right-label {
			position: relative;
			.squire {
				top: 50%;
				margin-top: -4px;
				right: -16px;
				border: 1px solid #00ddff;
				transform: rotate(-180deg);
			}
		}
	}
	.bar {
		margin-top: 9px;
		display: flex;
		.left-bar {
			height: 16px;
			background: linear-gradient(90deg, #00ddff -0.02%, #745eff 100.05%);
			transform: matrix(-1, 0, 0, 1, 0, 0);
		}
		.right-bar {
			height: 16px;
			background: #0057a9;
			border: 1px solid #00ddff;
			margin-left: 2px;
		}
	}
	.number {
		margin-top: 4px;
		font-family: 'font-num';
		font-weight: bold;
		font-size: 18px;
		line-height: 21px;
		display: flex;
		justify-content: space-between;
		color: #ffffff;
	}
}
</style>
