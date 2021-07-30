<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.o-title-5.pos-r
		.o-title-5-icon-left
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
.o-title-5-icon-left {
	width: 6px;
	height: 28px;
	background-image: url('./tip.png');
	background-size: 6px 28px;
}
.o-title-5 {
	align-items: center;
	height: 100%;
	h2 {
		font-size: 24px;
		font-weight: 600;
		color: #fff;
		margin-left: 8px;
	}
}
</style>
