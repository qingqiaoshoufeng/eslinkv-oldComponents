<template lang="pug">
widget-normal.b-title-2.fn-flex(:value="value", :customConfig="customConfig")
	.mn-nav
		.nav-btn-box
			.nav-btn(
				v-for="(item, index) in data",
				:key="index",
				@click="navSelect(item)",
				:class="{ isActive: item.key == active }") {{ item.label }}
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
	active = 'nav1'
	editor = Editor.Instance()
	firstPageList = ['sqju2e5pyv', 'oqzqtu67u3n']
	openSenceList = {}
	navSelect(item): void {
		const currentOpenSence =
			window.eslinkV.Editor.prototype.openSenceList[0]
		if (
			currentOpenSence &&
			this.firstPageList.includes(currentOpenSence) &&
			item.key == 'nav1'
		) {
			return
		}
		if (item.id.length > 0) {
			;(window.eslinkV.Editor.prototype as any).openWithClose.call(
				this.editor,
				item.id[0],
			)
			this.active = item.key
		}
	}
	mounted() {
		window.addEventListener('opencenceListChange', e => {
			if (e.detail) {
				if (this.firstPageList.includes(e.detail[0])) {
					this.active = 'nav1'
				}
			}
		})
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
			cursor: pointer;
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
