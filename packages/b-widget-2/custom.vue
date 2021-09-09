<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.row
		.item
			.block
				.font-num {{ data.num1 }}
				.label {{ config.config.text1 }}
			.h2 {{ config.config.text3 }}
			.finish-num {{ data.num3 }}
		.item
			.block
				.font-num {{ data.num2 }}
				.label {{ config.config.text2 }}
			.h2.right {{ config.config.text4 }}
			.finish-num.right.yellow {{ data.num4 }}
	.bar
		.bar1(:style="{right: bar1Right}")
		.bar2(:style="{left: bar2Left}")
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
	
	get bar1Right () {
		const p = this.data.num3 / this.data.num1 * 100
		return 100 - p + 1 + '%'
	}
	
	get bar2Left () {
		const p = this.data.num4 / this.data.num1 * 100
		return 100 - p + 1 + '%'
	}
}
</script>
<style lang="scss" scoped>
.right { text-align: right; }
.yellow { color: #F3DB72!important; }
.row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: left;
	.block {
		width: 387px;
		height: 252px;
		padding: 40px 0 0 40px;
		background: linear-gradient(90deg, #285066 0%, rgba(40, 80, 102, 0) 100%);
		.font-num {
			font-weight: bold;
			font-size: 96px;
			line-height: 96px;
			color: #fff;
		}
		.label {
			font-size: 48px;
			line-height: 48px;
			color: #FFFFFF;
			margin-top: 32px;
		}
	}
	.h2 {
		font-size: 48px;
		line-height: 48px;
		color: #FFFFFF;
		margin-top: 20px;
		margin-bottom: 24px;
	}
	.finish-num {
		font-weight: 500;
		font-size: 72px;
		line-height: 72px;
		color: #74FFF2;
		font-family: font-num;
		margin-bottom: 30px;
	}
}
.bar {
	position: relative;
	width: 100%;
	height: 35px;
	overflow: hidden;
	.bar1 {
		position: absolute;
		left: -10px;
		top: 0;
		bottom: 0;
		right: 21%;
		background: #74FFF2;
		transform: skewX(-30deg);
	}
	.bar2 {
		position: absolute;
		left: 81%;
		top: 0;
		bottom: 0;
		right: -10px;
		background: #F3DB72;
		transform: skewX(-30deg);
	}
}
</style>
