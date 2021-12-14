<template lang="pug">
.show-box
	.bot.one
	.bot.two
	.bot.three
	.bot.four
	slot
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.show-box {
	width: 100%;
	height: 100%;
	position: relative;
	.bot {
		position: absolute;
		width: 3px;
		height: 3px;
		background: #00ddff;
		&::before {
			position: absolute;
			content: '';
			bottom: -20px;
			left: 1px;
			width: 1px;
			height: 20px;
			background: #0057a9;
		}
		&::after {
			position: absolute;
			content: '';
			top: 1px;
			left: 3px;
			width: 20px;
			height: 1px;
			background: #0057a9;
		}
	}
	.one {
		top: 0;
		left: 0;
	}
	.two {
		transform: rotate(90deg);
		top: 0;
		right: 0;
	}
	.three {
		transform: rotate(180deg);
		bottom: 0;
		right: 0;
	}
	.four {
		transform: rotate(-90deg);
		bottom: 0;
		left: 0;
	}
}
</style>
