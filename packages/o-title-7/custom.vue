<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig" class="main")
	h2 {{ config.config.title || data.title }}
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
h2 {
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
	border-left: 4px solid #00DDFF;
	padding-left: 8px;
	text-align: left;
	font-style: normal;
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: #FFFFFF;
	display: flex;
	align-items: center;
}
</style>
