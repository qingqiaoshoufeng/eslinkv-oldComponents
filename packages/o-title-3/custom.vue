<template lang="pug">
.widget-part(:style="styles", v-if="data")
	.fn-flex.flex-row.o-title-3
		h2 {{ config.config.title ? config.config.title : data.title }}
</template>
<script lang="ts">
const { widgetMixin } = eslinkV
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component
export default class extends mixins(widgetMixin) {
	async created() {
		this.configValue = this.parseConfigValue(value, customConfig)
	}
}
</script>
<style lang="scss" scoped>
.o-title-3 {
	align-items: center;
	background-color: rgba(2, 48, 102, 1);
	border-left: 4px solid rgba(32, 90, 158, 1);
	border-right: 4px solid rgba(32, 90, 158, 1);
	height: 100%;
	justify-content: center;

	h2 {
		font-size: 24px;
		font-weight: 600;
		color: #fff;
	}
}
</style>
