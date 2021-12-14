<template lang="pug">
widget-normal.b-title-2.fn-flex(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.mn-nav
		.nav-btn-box
			.nav-btn(
				v-for="item in data",
				:key="item.key",
				@click="navSelect(item.key)",
				:class="[isActive === item.key ? 'isActive' : '']") {{ item.label }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	isActive = this.config.config.defaultValue
	editor = Editor.Instance()
	eventTypes = [
		{ key: 'click-nav1', label: '首页点击事件' },
		{ key: 'click-nav2', label: '运行点击事件' },
		{ key: 'click-nav3', label: '服务点击事件' },
		{ key: 'click-nav4', label: '工程点击事件' },
	]
	navSelect(type: string): void {
		this.isActive = type
		this.__handleEvent__(`click-${type}`)
	}
	@Watch('config.config.defaultValue', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.isActive = val
		}
	}
}
</script>
<style lang="scss" scoped>
.mn-nav {
	position: relative;
	width: 100%;
	height: 100%;
	color: #fff !important;
	background: url(./background.svg) no-repeat top center;
	background-size: 100% 100%;
	.nav-btn-box {
		.nav-btn {
			position: absolute;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: 108px;
			height: 56px;
			background: #001a77;
			border: 2px solid #0057a9;
			border-radius: 47px;
			font-family: PingFang HK;
			font-weight: 600;
			font-size: 24px;
			color: #fff;
			&:nth-child(1) {
				top: 73px;
				left: 368px;
			}
			&:nth-child(2) {
				top: 56px;
				left: 524px;
			}
			&:nth-child(3) {
				top: 56px;
				right: 568px;
			}
			&:nth-child(4) {
				top: 73px;
				right: 412px;
			}
		}
		.isActive {
			background: #0057a9;
			border: 2px solid #00ddff;
			box-sizing: border-box;
			box-shadow: inset 0p;
		}
	}
}
</style>
