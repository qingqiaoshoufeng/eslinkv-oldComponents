<template lang="pug">
.widget-part(:style="styles" v-if="data")
	.item(v-for="(k, i) in data.value" :key="i")
		.gas-info
			.gas-title {{ k.name }}
			.gas-num.font-num {{ k.value.toLocaleString() }}
		.gas-progress
			.progress(:style="{ width: k.percent + '%' }")
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'

@Component
export default class OBar2 extends mixins(widgetMixin) {
	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
	}
}
</script>
<style lang="scss" scoped>
.item {
	margin-bottom: 22px;
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
</style>
