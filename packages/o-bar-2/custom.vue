<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.o-bar-2(v-if="config.config.show")
		.item(
			v-for="(k, i) in data.value",
			:key="i",
			:style="`transform:scale(${config.config.scale})`"
		)
			.gas-info
				.gas-title {{ k.name }}
				.gas-num.font-num {{ k.value.toLocaleString() }}{{ config.config.unit }}
			.gas-progress
				.progress(:style="{ width: k.percent + '%' }")
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class OBar2 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.o-bar-2 {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.item {
		margin-bottom: 22px;
		transform-origin: 0 0;
		&:last-child {
			margin-bottom: 0;
		}
		.gas-info {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 16px;
			color: #fff;

			.gas-num {
				font-weight: bold;
			}
		}
	}

	.gas-progress {
		height: 8px;
		padding: 2px 0;
		margin-top: 8px;
		background: rgba(255, 255, 255, 0.2);

		.progress {
			position: relative;
			width: 260px;
			height: 4px;
			background: #00ddff;
			&:after {
				width: 20px;
				height: 20px;
				content: '';
				display: block;
				position: absolute;
				right: -9px;
				top: -8px;
				background: url('./point.svg') no-repeat;
				background-size: 100% 100%;
			}
		}
	}
}
</style>
