<template>
	<div class="widget-part pos-r" :style="styles" ref="box">
		<div class="mnboxs">
			<div
				class="mnboxs_border"
				:style="`border-color: ${config.config.borderColor}`"
			>
				<div
					class="radios radios_1"
					v-if="config.config.radios"
					:style="`background:  ${config.config.borderColor}`"
				></div>
			</div>
			<div
				class="mnboxs_border"
				:style="`border-color: ${config.config.borderColor}`"
			>
				<div
					class="radios radios_2"
					v-if="config.config.radios"
					:style="`background:  ${config.config.borderColor}`"
				></div>
			</div>
			<div
				class="mnboxs_border"
				:style="`border-color: ${config.config.borderColor}`"
			>
				<div
					class="radios radios_3"
					v-if="config.config.radios"
					:style="`background:  ${config.config.borderColor}`"
				></div>
			</div>
			<div
				class="mnboxs_border"
				:style="`border-color: ${config.config.borderColor}`"
			>
				<div
					class="radios radios_4"
					v-if="config.config.radios"
					:style="`background:  ${config.config.borderColor}`"
				></div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { widgetMixin } from '@eslinkv/vue2'
import { customConfig, value } from './index.component'

export default {
	mixins: [widgetMixin],
	created(): void {
		this.configValue = this.parseConfigValue(value, customConfig)
	}
}
</script>
<style lang="scss" scoped>
.mnboxs {
	width: 100%;
	height: 100%;
	position: relative;
	.mnboxs_border {
		width: 15px;
		height: 15px;
		border: 1px solid rgba(94, 226, 253, 1);
		position: absolute;
	}
	:nth-child(1) {
		border-right: 0;
		border-bottom: 0;
	}
	:nth-child(2) {
		border-left: 0;
		border-bottom: 0;
		top: 0;
		right: 0;
	}
	:nth-child(3) {
		border-right: 0;
		border-top: 0;
		bottom: 0;
		left: 0;
	}
	:nth-child(4) {
		border-left: 0;
		border-top: 0;
		bottom: 0;
		right: 0;
	}
	.radios {
		width: 4px;
		height: 4px;
		background: rgba(94, 226, 253, 1);
		position: absolute;
	}
	.radios_1 {
		top: -2px;
		left: -2px;
	}
	.radios_2 {
		top: -2px;
		right: -2px;
	}
	.radios_3 {
		bottom: -2px;
		left: -2px;
	}
	.radios_4 {
		bottom: -2px;
		right: -2px;
	}
}
</style>
