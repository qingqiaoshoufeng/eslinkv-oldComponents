<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes"
)
	.tab(:style="themeStyle")
		.wraper-box
			.tab-wraper(:ref="'tabWraper'")
				.tab-item(
					:style="style",
					v-for="(item, index) in config.config.titles",
					:class="tabState === item.url ? 'active' : ''",
					@click="chooseTab(item, index)"
				) {{ item.name }}
	.tool
		i-select.levels(v-model="type", @on-change="changeLevel")
			i-option(
				:value="item.value",
				:key="item.name",
				v-for="(item, index) in renderSelectList"
			) {{ item.name }}
		.filter-item
			div(
				v-for="(item, index) in renderCheckList",
				@click="changeRepairState(item.value)",
				:class="repairState == item.value ? 'active' : ''"
			) {{ item.name }}
	.list(
		v-if="list && list.length > 0",
		:style="{ height: '100%', overflow: 'hidden' }",
		@mouseover="stop = true",
		@mouseleave="stop = false"
	)
		transition-group.list-group(
			:name="showList ? 'hidden-list' : ''",
			ref="hidden"
		)
			component(
				:is="currentComponentName",
				:getItem="getItem",
				:data="item",
				v-for="(item, index) in list",
				:key="index",
				:index="index",
				:themeStyle="themeStyle"
			) 
		.empty(v-if="!list || !list.length") 暂无数据
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig, eventTypes } from './index.component'
import { Select, Option } from 'view-design'
import bIcon from './components/b-icon.vue'
import ranking from './components/ranking.vue'
import listItemWorkeffortTast from './components/listItemWorkeffortTast.vue'
import requestAndRenderConfig, { dataType } from './components/config.ts'
@Component({
	components: {
		widgetNormal,
		'i-select': Select,
		'i-option': Option,
		bIcon,
		listItemWorkeffortTast,
		ranking,
	},
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	eventTypes = eventTypes
	customConfig = customConfig
	currentComponentName = 'listItemWorkeffortTast'
	repairState = ''
	type = ''
	tabState = ''
	stop = false
	timer = null
	timerout = null
	showList = true
	list = []
	style = {
		width: `${100 / Math.min(this.config.config.titles.length, 3)}%`,
	}
	themeStyle = {
		background: this.config.config.themeColor,
	}

	get renderSelectList() {
		return (
			this.config.config.selectList.filter(
				item => item.type === this.tabState,
			) || []
		)
	}
	get renderCheckList() {
		return (
			this.config.config.checkList.filter(
				item => item.type === this.tabState,
			) || []
		)
	}

	start() {
		if (this.timer) clearInterval(this.timer)
		this.timer = setInterval(() => {
			if (!this.stop) {
				let p = this.list.shift()
				setTimeout(() => {
					this.list.push(p)
				}, 1000)
			}
		}, 3000)
	}
	// tab切换
	chooseTab(val, index) {
		this.tabState = val.url
		this.list = []
		if (val === 2) {
			this.__handleEvent__('click1', val)
		} else {
			// this.__handleEvent__('click5')
		}
		this.transformLeft(index)
		this.formatParams()
		this.getCurrentComponentName()
	}
	// 下拉选择器切换
	changeLevel(val) {
		this.showList = false
		this.type = val
		this.list = []
		this.__handleEvent__('click3', {
			priority: val,
			status: this.repairState,
		})
		this.formatParams()
	}
	mounted() {
		this.repairState = this.config.config.checkDefaultValue
		this.type = this.config.config.selectDefaultValue
		this.tabState = this.config.config.tabDefaultValue
		this.getCurrentComponentName()
		this.formatParams()
	}
	// 单选框切换
	changeRepairState(val) {
		this.showList = false
		this.repairState = val
		this.list = []
		this.__handleEvent__('click2', { priority: this.type, status: val })
		this.formatParams()
	}

	getItem(item) {
		this.__handleEvent__('click4', item.id)
	}

	beforeDestroy() {
		if (this.timer) clearInterval(this.timer)
	}
	transformLeft(val) {
		this.config
		debugger
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const target = this.$refs.tabWraper as any
		if (!target) return
		const length = this.config.config.titles.length
		const transformMap = {}
		for (let i = 0; i < length; i++) {
			if (i == 0) {
				transformMap[i] = 0
			} else if (i == length - 1) {
				transformMap[i] = length - 3
			} else {
				transformMap[i] = i - 1
			}
		}
		const width = target.clientWidth / 3
		// target.style = {
		// 	...target.style,
		// 	left: `${width * transformMap[val]}px`,
		// }
		target.style.left = `-${width * transformMap[val]}px`

		console.log(
			width,
			target.style,
			Object.isFrozen(target.style),
			`-${width * transformMap[val]}px`,
			transformMap[val],
		)
	}

	formatParams() {
		const { tabState } = this
		if (!requestAndRenderConfig[tabState]) {
			console.log(`请配置${tabState}相应配置项`)
			return
		}
		const { paramsKeyMap, url } = requestAndRenderConfig[tabState]
		const params = {}
		let paramsString = ''
		Object.entries(paramsKeyMap).forEach(([key, value]) => {
			params[value as string] = this[key]
			paramsString += `${value}=${this[key]}&`
		})
		paramsString = paramsString.slice(0, -1)
		this.request(`${url}?${paramsString}`)
	}
	getCurrentComponentName() {
		let key = this.tabState
		this.currentComponentName = requestAndRenderConfig[key].componentName
	}
	async request(url: string): Promise<Record<string, string>[]> {
		// const {} = this
		let res = await fetch(url)
		const result = await res.json()
		this.list = result.data
		return result
	}
}
</script>
<style lang="scss" scoped>
.tab {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 121px;
	background: #285066;
	border-radius: 24px;
	padding: 0 95px;
	font-size: 36px;
	line-height: 36px;
	color: rgba(255, 255, 255, 0.75);
	position: relative;
	overflow: hidden;
	.wraper-box {
		overflow: hidden;
		width: 100%;
		.tab-wraper {
			width: 100%;
			position: relative;
			display: flex;
			transition: left 0.4s ease-in-out, opacity 0.6s ease-in-out;
			.tab-item {
				flex-shrink: 0;
				height: 100%;
				line-height: 121px;
				position: relative;
				cursor: pointer;
				&.active {
					font-weight: 600;
					color: #ffffff;
					&:after {
						content: '';
						display: block;
						position: absolute;
						bottom: 0;
						left: 0;
						right: 0;
						margin: auto;
						width: 0;
						height: 0;
						border-right: 15px solid transparent;
						border-top: 15px solid transparent;
						border-left: 15px solid transparent;
						border-bottom: 15px solid #74fff2;
					}
				}
			}
		}
	}
}
.tool {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 14px 0 11px 20px;
	border-bottom: 2px solid rgba(255, 255, 255, 0.25);
	.levels {
		position: relative;
		width: 80px;
	}
	::v-deep.ivu-select-selection {
		width: 106px;
		height: 56px;
		line-height: 56px;
		background-color: #285066;
		border: 1px solid #74fff2;
		color: #fff;
		.ivu-icon {
			color: #fff;
		}
		.ivu-select-placeholder {
			font-size: 24px;
			font-weight: 700;
			height: 56px;
			line-height: 56px;
		}
		.ivu-select-selected-value {
			font-size: 24px;
			font-weight: 700;
			height: 56px;
			line-height: 56px;
		}
	}
	::v-deep.ivu-select-dropdown {
		min-width: 106px !important;
		// min-height: 100px;
		max-height: 250px;
		top: 70px !important;
		left: auto !important;
		border: 1px solid #74fff2;
		background-color: #285066;
		.ivu-select-item {
			height: 56px;
			line-height: 56px;
			padding: 0px !important;
			font-size: 24px !important;
			font-weight: 400;
			color: rgba(255, 255, 255, 0.75);
			&.ivu-select-item-selected,
			&:hover {
				color: #fff;
				background: rgba(116, 255, 242, 0.3);
				font-weight: 700;
			}
		}
	}

	.filter-item {
		display: flex;
		> div {
			cursor: pointer;
			margin-left: 47px;
			color: #74fff2;
			position: relative;
			font-size: 24px;
			font-weight: 400;
			&.active {
				color: #fff;
				&::after {
					position: absolute;
					top: 6px;
					left: -24px;
					display: inline-block;
					width: 0;
					height: 0;
					content: ' ';
					border: 6px solid #fff;
				}
			}
			&::before {
				position: absolute;
				top: 0px;
				left: -30px;
				display: inline-block;
				width: 24px;
				height: 24px;
				content: ' ';
				border: 2px solid #0df;
			}
		}
	}
}
.list {
	position: relative;
	.list-group {
		display: block;
		overflow: hidden;
		height: 100%;
	}

	.empty {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: #fff;
		font-size: 24px;
	}
	.hidden-list-leave-to,
	.hidden-list-enter-from {
		opacity: 0;
		transform: translateY(-40px);
	}
	.hidden-list-leave-active,
	.hidden-list-enter-active {
		position: absolute;
		right: 0;
		left: 0;
	}
}
</style>
