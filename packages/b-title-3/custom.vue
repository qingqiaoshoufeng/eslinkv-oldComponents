<template lang="pug">
widget-normal.b-title-3.fn-flex(:value="value", :customConfig="customConfig")
	.b-title-3-left.fn-flex.flex-column
		h2 {{ config.config.title }}
		h2 {{ config.config.des }}
	h3.font-num {{ data[0].toLocaleString() }}
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
.b-title-3-left {
	align-items: center;
	text-align: right;
	margin-left: 64px;
}
.b-title-3 {
	align-items: center;
	padding: 40px 0;
	border-bottom: 2px solid rgba(116, 255, 242, 1);
	border-top: 2px solid rgba(116, 255, 242, 1);
	background-color: rgba(5, 20, 35, 1);
	&:before,
	&:after {
		position: absolute;
		content: '';
		width: 2px;
		top: 0;
		height: 100%;
		background-image: linear-gradient(
			to top,
			rgba(116, 255, 242, 1),
			rgba(5, 20, 35, 1),
			rgba(116, 255, 242, 1)
		);
	}
	&:before {
		left: 0;
	}
	&:after {
		right: 0;
	}
	h2 {
		color: rgba(116, 255, 242, 1);
		font-weight: 600;
		font-size: 36px;
		line-height: 60px;
		width: 100%;
	}
	h3 {
		margin-left: auto;
		margin-right: 65px;
		font-weight: bold;
		font-size: 72px;
		line-height: 48px;
		color: #fff;
	}
}
</style>
