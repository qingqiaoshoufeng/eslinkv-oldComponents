<template lang="pug">
border-box.border-box
	.repaire-number
		.img 
			img(src="../assert/rushRepair.svg", v-if="type === 'rush'")
			img(src="../assert/keepRepair.svg", v-if="type === 'keep'")
		.content
			.number {{ number.toLocaleString() }}
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
		type: {
			type: String,
			default: 'rush',
		},
	},
}
</script>
<style lang="scss" scoped>
.border-box {
	width: 200px;
	height: 100px;
	padding: 1px;
}
.repaire-number {
	width: 100%;
	height: 100%;
	padding: 0 14px 0;
	display: flex;
	align-items: center;
	background: linear-gradient(180deg, rgba(1, 59, 144, 0) 0%, #013b91 100%);
	.img {
		width: 52px;
		height: 52px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.content {
		margin-left: 8px;
		text-align: left;
		.number {
			font-family: 'font-num';
			font-weight: bold;
			font-size: 36px;
			line-height: 42px;
			color: #ffffff;
		}
		.label {
			margin-top: 8px;
			font-family: PingFang SC;
			font-weight: 600;
			font-size: 18px;
			line-height: 25px;
			color: #5ee2fd;
		}
	}
}
</style>
