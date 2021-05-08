<template lang="pug">
.widget-part(:style="styles", v-if="data")
	.item(v-for="(k, i) in data.value", :key="i" @click="__handleClick__(k)")
		img.logo(:src="k.img" v-if="k.img")
		.main
			.gas-info
				.gas-title {{ k.name }}
				.gas-percent.font-num {{ k.percent.toFixed(2) }}%
				.gas-num.font-num
					em {{ k.value.toLocaleString() }}
					span {{ config.config.unit }}
			.gas-progress
				.progress(:style="{ width: k.percent + '%' }")
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component.ts'
import { widgetMixin } from 'eslinkv-sdk'

@Component
export default class OBar1 extends mixins(widgetMixin) {
	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
	}
}
</script>
<style lang="scss" scoped>
.item {
	margin-bottom: 22px;
	display: flex;
	&:last-child {
		margin-bottom: 0;
	}
	.logo {
		width: 54px;
		height: 54px;
		margin-right: 16px;
	}
	.main {
		flex: 1;
	}
	.gas-info {
		display: flex;
		align-items: center;
		justify-content: space-between;

		.gas-title {
			font-size: 16px;
			color: #fff;
		}

		.gas-percent {
			flex: 1;
			margin-left: 16px;
			font-size: 16px;
			font-weight: bold;
			color: #fff;
			text-align: left;
		}

		.gas-num {
			font-size: 16px;
			line-height: 24px;
			color: #c0c1c8;

			em {
				font-size: 16px;
				font-style: normal;
				font-weight: bold;
				color: #fff;
				margin-right: 8px;
			}
		}
	}
}

.gas-progress {
	height: 12px;
	padding: 2px 2px;
	margin-top: 10px;
	background: #0057a9;

	.progress {
		position: relative;
		width: 260px;
		height: 8px;
		background: #00ddff;
		&:after {
			background: #fff;
			width: 4px;
			height: 8px;
			content: '';
			display: block;
			position: absolute;
			right: 0;
			top: 0;
		}
	}
}
</style>
