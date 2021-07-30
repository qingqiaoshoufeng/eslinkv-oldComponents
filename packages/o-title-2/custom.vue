<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.o-title-2.pos-r
		.o-title-2-icon
		h2 {{ config.config.title ? config.config.title : data.title }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
value = value
customConfig = customConfig
	
}
</script>
<style lang="scss" scoped>
.o-title-2-icon {
	width: 8px;
	height: 8px;
	margin-right: 8px;
	background-color: rgba(0, 221, 255, 1);
}

.o-title-2 {
	align-items: center;
	padding-bottom: 7px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);
	height: 100%;
	h2 {
		font-size: 24px;
		font-weight: 600;
		line-height: 32px;
		color: #fff;
	}
	&:before,
	&:after {
		position: absolute;
		content: '';
		width: 12px;
		height: 1px;
		bottom: -1px;
		background-color: rgba(255, 255, 255, 1);
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
}
</style>
