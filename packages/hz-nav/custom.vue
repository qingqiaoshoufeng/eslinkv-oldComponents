<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.fn-flex.flex-row.hz-nav(:class="`active-${isActive}`")
		.nav-box
			.nav-button(
				v-for="item in data",
				:key="item.key",
				@click="navSelect(item.key)")
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	editor = Editor.Instance()
	isActive = 'nav1'
	background = 'url(./nav1.png) no-repeat top center'
	eventTypes = [
		{ key: 'click-nav1', label: '运行点击事件' },
		{ key: 'click-nav2', label: '服务点击事件' },
		{ key: 'click-nav3', label: '首页点击事件' },
		{ key: 'click-nav4', label: '工程点击事件' },
		{ key: 'click-nav5', label: '洞察点击事件' },
	]
	navSelect(type: string): void {
		this.isActive = type
		this.__handleEvent__(`click-${type}`)
	}
}
</script>
<style lang="scss" scoped>
.hz-nav {
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 100%;
	.nav-box {
		display: flex;
		justify-content: space-evenly;
		width: 50%;
		height: 100%;
		.nav-button {
			width: 25%;
			height: 100%;
		}
	}
}
.active-nav1 {
	background: url(./nav1.png) no-repeat top center;
	background-size: 100% 100%;
}
.active-nav2 {
	background: url(./nav2.png) no-repeat top center;
	background-size: 100% 100%;
}
.active-nav3 {
	background: url(./nav3.png) no-repeat top center;
	background-size: 100% 100%;
}
.active-nav4 {
	background: url(./nav4.png) no-repeat top center;
	background-size: 100% 100%;
}
.active-nav5 {
	background: url(./nav5.png) no-repeat top center;
	background-size: 100% 100%;
}
</style>
