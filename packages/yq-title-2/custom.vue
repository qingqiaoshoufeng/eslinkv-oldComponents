<template lang="pug">
widget-normal.main(:value="value", :customConfig="customConfig")
	.bg-box(v-if="config.config.show")
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
.bg-box {
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
	// padding-left: 47px;
	// padding-right: 50px;

	h2 {
		font-family: PingFang SC;
		font-style: normal;
		font-weight: normal;
		font-size: 40px;
		line-height: 56px;
		color: #fff;
		flex: 1;
		text-align: left;
	}
	.value {
		font-family: DIN Alternate;
		font-style: normal;
		font-weight: bold;
		font-size: 56px;
		line-height: 65px;
		display: flex;
		align-items: center;
		text-align: right;

		/* style1/主色 */

		color: #74fff2;
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
