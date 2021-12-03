<template lang="pug">
widget-normal.main(:value="value", :customConfig="customConfig")
	.yq-title-4
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
.yq-title-4 {
	padding: 0, 50px, 0, 30px;
	height: 100%;
	width: 100%;

	padding-left: 45px;
	background: linear-gradient(
		90deg,
		rgba(40, 80, 102, 0.5) 0%,
		rgba(40, 80, 102, 0) 100%
	);
	display: flex;
	align-items: center;
	flex-direction: column;
	// padding-left: 47px;
	// padding-right: 50px;

	h2 {
		font-family: PingFang SC;
		font-size: 40px;
		font-style: normal;
		font-weight: 400;
		line-height: 56px;
		letter-spacing: 0px;
		text-align: left;
		color: #fff;
		text-align: left;
		margin-top: 24px;
		align-items: center;
		flex-shrink: 0;
		flex-grow: 0;
		width: 100%;
		flex-shrink: 0;
		flex-flow: 0;
	}
	.value {
		font-family: DIN Alternate;
		font-style: normal;
		font-weight: bold;
		font-size: 80px;
		// line-height: 93px;
		text-align: right;
		width: 100%;
		text-align: right;
		justify-content: flex-end;
		padding-right: 38px;
		flex: 1;
		align-items: center;

		/* style1/主色 */

		color: #74fff2;
		display: flex;
		text-align: right;
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
