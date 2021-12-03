<template lang="pug">
widget-normal.main(:value="value", :customConfig="customConfig")
	.border-box
		.bg-box
			h2 {{ config.config.title || data.title }}
			.value {{ config.config.value || data.value }}
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
.border-box {
	height: 100%;
	width: 100%;
	padding: 2px;
	// height: 152px;
	background: linear-gradient(
		to bottom,
		rgba(116, 255, 242, 1),
		rgba(5, 20, 35, 1),
		rgba(116, 255, 242, 1)
	);
	display: flex;
	align-items: center;
	justify-content: center;
	.bg-box {
		margin: 2px;
		height: 100%;
		width: 100%;
		padding-left: 45px;
		background: #051423;
		display: flex;
		align-items: center;
		// padding-left: 47px;
		// padding-right: 50px;

		h2 {
			height: 36px;
			font-family: PingFang SC;
			font-style: normal;
			font-weight: 600;
			font-size: 36px;
			line-height: 36px;
			color: #74fff2;
			margin-right: 64px;
		}
		.value {
			font-family: DIN Alternate;
			font-style: normal;
			font-weight: bold;
			font-size: 72px;
			line-height: 72px;
			/* identical to box height, or 100% */
			flex: 1;
			text-align: right;
			padding-right: 40px;
			color: #ffffff;
		}
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
