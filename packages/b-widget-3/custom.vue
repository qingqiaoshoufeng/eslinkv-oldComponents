<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.tab
		//- .tab-item(:class="tabState === 0 ? 'active' : ''", @click="chooseTab(0)") {{ config.config.title1 }}
		//- .tab-item(:class="tabState === 1 ? 'active' : ''", @click="chooseTab(1)") {{ config.config.title2 }}
		.tab-item(:class="tabState === 0 ? '' : ''") {{ config.config.title1 }}
		.tab-item(:class="tabState === 1 ? '' : ''") {{ config.config.title2 }}
		.tab-item(:class="'active'", @click="chooseTab(2)") {{ config.config.title3 }}
	.tool
		i-select.levels(v-model="type", @on-change="changeLevel")
			i-option(value="0", key="全部") 全部
			i-option(value="1", key="紧急") 紧急
			i-option(value="2", key="一般") 一般
			i-option(value="3", key="蹲守") 蹲守
		.filter-item
			div(
				@click="changeRepairState(1)",
				:class="repairState === 1 ? 'active' : ''") 未处理{{ data.unProcessed }}
			div(
				@click="changeRepairState(2)",
				:class="repairState === 2 ? 'active' : ''") 已处理{{ data.processed }}
	.list(
		v-if="list && list.length > 0",
		:style="{ height: '100%', overflow: 'hidden' }",
		@mouseover="stop = true",
		@mouseleave="stop = false")
		transition-group.list-group(
			:name="showList ? 'hidden-list' : ''",
			ref="hidden")
			.list-item(
				v-for="item in list",
				:key="item.index",
				@click="getItem(item)")
				.row1
					b-icon(
						:name="item.hiddenLevel === '紧急' ? 'icon-erjixunjianyinhuan' : item.hiddenLevel === '一般' ? 'icon-sanjixunjianyinhuan' : item.hiddenLevel === '蹲守' ? 'icon-xunjianyinhuanyizhenggai' : ''",
						:size="48")
					.name {{ item.hiddenName }}
					.time {{ item.hiddenTime }}
				.row2
					.address {{ item.address }}
					.state(:class="item.hiddenStatus === '未处理' ? 'unhandled' : ''") {{ item.hiddenStatus }}
		.empty(v-if="!list || !list.length") 暂无数据
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig, eventTypes } from './index.component'
import { Select, Option } from 'view-design'
import bIcon from './components/b-icon.vue'
@Component({
	components: {
		widgetNormal,
		'i-select': Select,
		'i-option': Option,
		bIcon,
	},
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	eventTypes = eventTypes
	customConfig = customConfig
	repairState = 1
	type = '0'
	tabState = 0
	stop = false
	timer = null
	timerout = null
	showList = true
	list = []
	@Watch('data', { deep: true, immediate: true })
	onDataValueChange(val): void {
		this.list = JSON.parse(JSON.stringify(this.data.realTimeList))
		this.list.forEach((item, i) => {
			item.index = i
		})
		this.$nextTick(() => {
			this.showList = true
		})
		if (this.timer) clearInterval(this.timer)
		if (this.timerout) clearTimeout(this.timerout)
		this.timerout = setTimeout(() => {
			let { offsetHeight, scrollHeight } = this.$refs.hidden.$el
			if (scrollHeight > offsetHeight) {
				this.start()
			}
		}, 1000)
	}

	@Watch('config.config.tabDefaultValue', { deep: true, immediate: true })
	onDataChange(val): void {
		if (!isNaN(val) && val !== '') {
			this.chooseTab(Number(val))
		}
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
	chooseTab(val) {
		this.tabState = val
		this.list = []
		if (val === 2) {
			this.__handleEvent__('click1', val)
		} else {
			// this.__handleEvent__('click5')
		}
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
	}

	// 单选框切换
	changeRepairState(val) {
		this.showList = false
		this.repairState = val
		this.list = []
		this.__handleEvent__('click2', { priority: this.type, status: val })
	}

	getItem(item) {
		this.__handleEvent__('click4', item.id)
	}

	beforeDestroy() {
		if (this.timer) clearInterval(this.timer)
	}
}
</script>
<style lang="scss" scoped>
.tab {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 881px;
	height: 121px;
	background: #285066;
	border-radius: 24px;
	padding: 0 95px;
	font-size: 36px;
	line-height: 36px;
	color: rgba(255, 255, 255, 0.75);
	.tab-item {
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
		min-height: 100px;
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
		.list-item {
			padding: 40px 25px 40px 0;
			background: rgba(40, 80, 102, 0.5);
			margin-top: 39px;
			transition: all 1200ms;
			cursor: pointer;
			&:hover {
				background: #051423;
			}
			.row1 {
				display: flex;
				align-items: center;
				.icon {
					width: 50px;
					height: 50px;
					background: #205a9e;
					margin-left: 30px;
					margin-right: 18px;
				}
				.name {
					width: 370px;
					text-align: left;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 48px;
					line-height: 50px;
					color: #feffff;
				}
				.time {
					flex: 1;
					font-size: 36px;
					line-height: 36px;
					text-align: right;
					color: #ffffff;
				}
			}
			.row2 {
				margin-top: 32px;
				display: flex;
				padding-left: 98px;
				.address {
					width: 600px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 36px;
					line-height: 36px;
					text-align: left;
					color: rgba(255, 255, 255, 0.75);
				}
				.state {
					flex: 1;
					font-size: 36px;
					line-height: 36px;
					text-align: right;
					color: #74fff2;
					position: relative;
					&:before {
						content: '';
						display: block;
						position: absolute;
						width: 22px;
						height: 22px;
						border-radius: 50%;
						background: #74fff2;
						left: 15px;
						top: 10px;
					}
					&.unhandled {
						color: #ff3317;
						&:before {
							background: #ff3317;
						}
					}
				}
			}
		}
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
