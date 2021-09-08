<template lang="pug">
widget-normal.b-title-4.fn-flex(:value="value", :customConfig="customConfig")
	h2 {{ config.config.title }}
	h3.font-num {{ data[0].toLocaleString() }}
	h4(v-if="config.config.des") {{ config.config.des }}
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
.b-title-4 {
	align-items: center;
	padding: 40px;
	background: linear-gradient(90deg, #285066 0%, rgba(40, 80, 102, 0) 100%);
	&:before {
		position: absolute;
		content: '';
		width: 32px;
		height: 32px;
		background: #74fff2;
		left: 56px;
	}
	h2 {
		font-weight: normal;
		font-size: 64px;
		line-height: 24px;
		padding-left: 98px;
		color: #ffffff;
	}
	h3 {
		font-weight: bold;
		font-size: 72px;
		line-height: 32px;
		color: #ffffff;
		margin-left: auto;
	}
	h4 {
		margin-left: 16px;
		font-size: 48px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.75);
	}
}
</style>
