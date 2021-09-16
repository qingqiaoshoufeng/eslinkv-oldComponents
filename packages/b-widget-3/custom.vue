<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.tab
		.tab-item(:class="tabState === 0 ? 'active' : ''", @click="chooseTab(0)") {{ config.config.title1 }}
		.tab-item(:class="tabState === 1 ? 'active' : ''", @click="chooseTab(1)") {{ config.config.title2 }}
		.tab-item(:class="tabState === 2 ? 'active' : ''", @click="chooseTab(2)") {{ config.config.title3 }}
	.tool
		i-select.levels(v-model="type", @on-change="changeLevel")
			i-option(value="全部", key="全部") 全部
			i-option(value="一级", key="一级") 一级
			i-option(value="二级", key="二级") 二级
			i-option(value="三级", key="三级") 三级
		.filter-item
			div(
				@click="changeRepairState(1)",
				:class="repairState === 1 ? 'active' : ''") 未处理{{ data.unhandledNumber }}
			div(
				@click="changeRepairState(0)",
				:class="repairState === 0 ? 'active' : ''") 已处理{{ data.handledNumber }}
	ul.list
		li(v-for="(k, i) in data.list")
			.row1
				.icon
				.name {{ k.hiddenName }}
				.time {{ k.hiddenTime }}
			.row2
				.address {{ k.address }}
				.state(:class="k.hiddenStatus === '未处理' ? 'unhandled' : ''") {{ k.hiddenStatus }}
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig, eventTypes } from './index.component'
import { Select, Option } from 'view-design'

@Component({
	components: {
		widgetNormal,
		'i-select': Select,
		'i-option': Option,
	},
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	eventTypes = eventTypes
	customConfig = customConfig
	repairState = 1
	type = '全部'
	tabState = 0

	@Watch('config.config.tabDefaultValue', { deep: true, immediate: true })
	onDataChange(val) {
		if (!isNaN(val) && val !== '') {
			this.chooseTab(Number(val))
		}
	}

	// tab切换
	chooseTab(val) {
		this.tabState = val
		this.__handleEvent__('click1', val)
	}

	// 下拉选择器切换
	changeLevel(val) {
		//
		this.__handleEvent__('click3', val)
	}

	// 单选框切换
	changeRepairState(val) {
		this.repairState = val
		this.__handleEvent__('click2')
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
	li {
		padding: 40px 25px 40px 0;
		background: rgba(40, 80, 102, 0.5);
		margin-top: 39px;
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
			width: 470px;
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
</style>
