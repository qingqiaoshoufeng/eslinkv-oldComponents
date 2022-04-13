<template lang="pug">
widget-normal.main(:value="value", :customConfig="customConfig")
	.yq-title-4(
		v-if="config.config.show",
		:style="{ background: `linear-gradient(90deg,${config.config.bgStartColor} 0%, ${config.config.bgEndColor} 100%)` }"
	)
		h2 {{ config.config.title || data.title }}
		.value(:style="{ color: config.config.numberColor }") {{ config.config.value.toLocaleString() || data.value.toLocaleString() }}
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
.yq-title-4 {
	height: 100%;
	width: 100%;
	padding: 8px 0 8px 16px;
	display: flex;
	align-items: center;
	flex-direction: column;

	h2 {
		font-family: PingFang SC;
		font-size: 16px;
		font-style: normal;
		font-weight: normal;
		line-height: 22px;
		letter-spacing: 0px;
		text-align: left;
		color: #fff;
		text-align: left;
		align-items: center;
		flex-shrink: 0;
		flex-grow: 0;
		width: 100%;
		flex-shrink: 0;
		flex-flow: 0;
	}
	.value {
		margin-top: 2px;
		font-family: 'font-num';
		font-weight: bold;
		font-size: 36px;
		line-height: 42px;
		text-align: right;
		width: 100%;
		text-align: right;
		justify-content: flex-end;
		padding-right: 24px;
		flex: 1;
		align-items: center;

		/* style1/主色 */

		color: #74fff2;
		display: flex;
	}
}
// h2 {
// 	width: 100%;
// 	height: 100%;
// 	background: linear-gradient(
// 		90deg,
// 		rgba(0, 87, 169, 0.4) 0%,
// 		rgba(0, 87, 169, 0) 100%
// 	);
// 	border-left: 4px solid #00ddff;
// 	padding-left: 8px;
// 	text-align: left;
// 	font-style: normal;
// 	font-weight: 600;
// 	font-size: 20px;
// 	line-height: 24px;
// 	color: #ffffff;
// 	display: flex;
// 	align-items: center;
// }
</style>
