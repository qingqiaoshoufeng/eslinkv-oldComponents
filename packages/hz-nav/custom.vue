<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.fn-flex.flex-row.hz-nav(:style="getSelectStyle")
		.nav-box
			.nav-button(
				v-for="item in data",
				:key="item.key",
				:class="isActive === item.key ? 'active' : ''",
				@click="navSelect(item.key)")
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
	isActive = 'nav1'
	background = 'url(./nav1.png) no-repeat top center'
	eventTypes = [{ key: 'click', label: '点击事件' }]
	navSelect(type: string): void {
		alert(type)
		this.isActive = type
		this.__handleEvent__('click', type)
	}
	getSelectStyle(): any {
		switch (this.isActive) {
			case 'nav1':
				this.background = 'url(./nav1.png) no-repeat top center'
				break
			case 'nav2':
				this.background = 'url(./nav2.png) no-repeat top center'
				break
			case 'nav3':
				this.background = 'url(./nav3.png) no-repeat top center'
				break
			case 'nav4':
				this.background = 'url(./nav4.png) no-repeat top center'
				break
			case 'nav5':
				this.background = 'url(./nav5.png) no-repeat top center'
				break
		}
		return {
			background: this.background,
		}
	}
}
</script>
<style lang="scss" scoped>
.hz-nav {
	align-items: flex-end;
	justify-content: center;
	width: 100%;
	height: 100%;
	background: url(./nav1.png) no-repeat top center;
	background-size: 100% 100%;
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
</style>
