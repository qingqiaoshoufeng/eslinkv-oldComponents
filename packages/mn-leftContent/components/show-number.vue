<template lang="pug">
border-box.border-box
	.show-number 
		.number 
			span {{ number.toLocaleString()  }}
			span.unit {{ unit }}
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
			default: 1214,
		},
		label: {
			type: String,
			default: '',
		},
		unit: {
			type: String,
			default: 'km',
		},
	},
}
</script>
<style lang="scss" scoped>
.border-box {
	width: 200px;
	height: 100px;
}
.show-number {
	width: 100%;
	height: 100%;
	padding-left: 14px;
	padding-top: 10px;
	text-align: left;

	.number {
		font-family: 'font-num';
		font-weight: bold;
		font-size: 36px;
		line-height: 42px;
		color: #ffffff;
		.unit {
			margin-left: 8px;
			font-size: 20px;
			line-height: 28px;
		}
	}
	.label {
		font-family: PingFang SC;
		font-size: 18px;
		line-height: 25px;
		margin-top: 8px;
		color: #5ee2fd;
	}
}
</style>
