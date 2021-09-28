<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.panel(:style="{ background: config.config.background }")
		.title {{ data.title }}
		.detail
			.detail-item(v-for="(item, i) in data.detailList")
				span.label {{ item.label }}：
				span.value {{ item.value }}
		.close-btn(@click="handleClose")
			b-icon(name="icon-close", :size="20")
</template>
<script>
import { value, customConfig } from './index.component'
import { widgetMixin, widgetNormal } from '@eslinkv/vue2'
import bIcon from './components/b-icon.vue'
export default {
	mixins: [widgetMixin],
	components: {
		widgetNormal,
		bIcon,
	},
	data() {
		return {
			value: value,
			customConfig: customConfig,
			eventTypes: [{ key: 'click', label: '关闭场景' }],
		}
	},
	methods: {
		handleClose() {
			// 关闭场景
			this.__handleEvent__('click')
		},
	},
}
</script>
<style lang="scss" scoped>
.panel {
	background: #071f36;
	border: 4px solid #74fff2;
	border-radius: 24px;
	padding: 32px 40px;
	width: 100%;
	height: 100%;
	text-align: left;
	.title {
		color: #fff;
		font-weight: 600;
		font-size: 48px;
		line-height: 48px;
	}
	.detail {
		margin-top: 12px;
		.detail-item {
			font-size: 36px;
			.label {
				color: #fff;
			}
			.value {
				margin-left: 8px;
				color: #ffdc45;
			}
		}
	}
	.close-btn {
		cursor: pointer;
		top: -52px;
		box-sizing: border-box;
		right: 0;
		position: absolute;
		background: #071f36;
		border: 2px solid #74fff2;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		&:active {
			opacity: 0.8;
		}
	}
}
</style>
