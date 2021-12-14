<template>
	<widget-normal :value="value" :customConfig="customConfig">
		<div class="mn-activity-data2">
			<div class="text">{{ config.config.title }}</div>
			<div class="number">
				{{ data.value }}{{ config.config.unit ? '' : '%' }}
				<span v-if="config.config.unit" class="unit">
					{{ config.config.unit }}
				</span>
			</div>
		</div>
	</widget-normal>
</template>
<script>
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
export default {
	name: 'mn-activity-data2',
	mixins: [widgetNormalMixin],
	components: { widgetNormal },
	data() {
		return {
			value,
			customConfig,
		}
	},
}
</script>
<style lang="scss" scoped>
.mn-activity-data2 {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 8px 0 24px;
	background: linear-gradient(
		90deg,
		rgba(0, 87, 169, 0.4) 0%,
		rgba(0, 87, 169, 0) 100%
	);

	color: #ffffff;
	.text {
		position: relative;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: -16px;
			display: block;
			width: 8px;
			height: 8px;
			background: #00ddff;
		}
	}
	.number {
		font-family: 'font-num';
		font-weight: bold;
		font-size: 18px;
		.unit {
			font-family: PingFang SC;
			font-weight: normal;
			font-size: 10px;
		}
	}
}
</style>
