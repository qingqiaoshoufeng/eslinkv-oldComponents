<template lang="pug">
border-box.border-box
	.ratio-number 
		.bar 
			.color-bar(:style="{ height: `${ratio}%` }")
		.content
			.number {{ isRatio ? ratio : number }}
				span(v-if="isRatio") %
			.label {{ label }}
</template>
<script>
import BorderBox from './border.vue'
export default {
	components: {
		BorderBox,
	},
	props: {
		number: {
			type: Number,
			default: 0,
		},
		label: {
			type: String,
			default: '',
		},
		ratio: {
			type: [Number, String],
			default: 0,
		},
		isRatio: {
			type: Boolean,
			default: false,
		},
	},
}
</script>
<style lang="scss" scoped>
.border-box {
	width: 200px;
	height: 138px;
}
.ratio-number {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 14px;
	text-align: left;
	position: relative;

	.bar {
		position: relative;
		width: 18px;
		height: 90px;
		opacity: 0.5;
		border: 1px solid #5ee2fd;
		box-sizing: border-box;
		.color-bar {
			position: absolute;
			bottom: 0;
			left: 2px;
			width: 12px;
			background: linear-gradient(
				180deg,
				#2bccff 0%,
				rgba(43, 204, 255, 0.0001) 100%
			);
		}
	}
	.content {
		margin-left: 16px;
		margin-top: 15px;
		.number {
			font-family: 'font-num';
			font-weight: bold;
			font-size: 36px;
			line-height: 42px;
			color: #ffffff;
		}
		.label {
			font-family: PingFang SC;
			font-size: 18px;
			line-height: 25px;
			color: #5ee2fd;
		}
	}
}
</style>
