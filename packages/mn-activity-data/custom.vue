<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.show-data(:style="{ display: config.config.show ? 'block' : 'none' }")
		.show-data-item(
			v-for="(item, index) in data",
			:key="index",
			:style="{ marginTop: `${config.config.marginTop}px`, height: `${config.config.barHeight}px` }"
		)
			.label(:style="{ color: config.config.textColor }") {{ item.label }}
			.number(
				:style="{ color: config.config.numberColor, fontSize: `${config.config.numberSize}px` }"
			) {{ item.value.toLocaleString() + (item.rate ? "%" : "") }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
@Component({
	components: {
		widgetNormal,
	},
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.show-data {
	width: 100%;
	height: 100%;
	.show-data-item {
		height: 40px;
		line-height: 40px;
		padding: 0 8px 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: linear-gradient(
			90deg,
			rgba(0, 87, 169, 0.4) 0%,
			rgba(0, 87, 169, 0) 100%
		);
		.number {
			font-family: 'font-num';
			font-weight: bold;
			font-size: 24px;
			line-height: 28px;
			color: #00ddff;
		}
		.label {
			font-family: PingFang SC;
			font-size: 18px;
			line-height: 25px;
			color: #ffffff;
		}
	}
}
</style>
