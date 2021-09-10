<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.tab
		.tab-item.active 工艺报警
		.tab-item 抢维事件
		.tab-item 巡检隐患
	.tool
		i-select.levels(v-model="type" @on-change="")
			i-option(value="全部" key="全部") 全部
			i-option(value="一级" key="一级") 一级
			i-option(value="二级" key="二级") 二级
			i-option(value="三级" key="三级") 三级
		.filter-item
			div.active(@click="changeRepairState(1)" :class="repairState === 1 ? 'active' : ''") 未处理
			div(@click="changeRepairState(0)" :class="repairState === 0 ? 'active' : ''") 已处理
	ul.list
		li(v-for="(k, i) in 4")
			.row1
				.icon
				.name xxx
				.time 11-03  08:23:27
			.row2
				.address 宁围镇振宁路1400号
				.state 未处理
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Select, Option } from 'view-design'

@Component({ components: {
		widgetNormal,
		'i-select': Select,
		'i-option': Option
} })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig

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
			color: #FFFFFF;
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
				border-bottom: 15px solid #74FFF2;
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
	border-bottom: 2px solid rgba(255, 255, 255, 0.25);;
	.levels {
		position: relative;
		width: 80px;
	}
	::v-deep.ivu-select-selection{
		background-color: #285066;
		border: 1px solid #74FFF2;
		color: #fff;
		.ivu-icon {
			color: #fff;
		}
	}
	::v-deep.ivu-select-dropdown {
		top: 35px!important;
		left: auto!important;
		background-color: #285066;
		.ivu-select-item {
			color: #fff;
			&.ivu-select-item-selected, &:hover {
				background: rgba(116, 255, 242, 0.3);
				font-weight: bold;
			}
		}
	}
	
	.filter-item {
		display: flex;
		> div {
			cursor: pointer;
			margin-left: 37px;
			color: #74FFF2;
			position: relative;
			&.active {
				color: #fff;
				&::after {
					position: absolute;
					top: 8px;
					left: -18px;
					display: inline-block;
					width: 0;
					height: 0;
					content: ' ';
					border: 4px solid #fff;
				}
			}
			&::before {
				position: absolute;
				top: 4px;
				left: -22px;
				display: inline-block;
				width: 16px;
				height: 16px;
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
			color: #FEFFFF;
		}
		.time {
			flex: 1;
			font-size: 36px;
			line-height: 36px;
			text-align: right;
			color: #FFFFFF;

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
			color: #74FFF2;
			position: relative;
			&:before {
				content: '';
				display: block;
				position: absolute;
				width: 22px;
				height: 22px;
				border-radius: 50%;
				background: #74FFF2;
				left: 15px;
				top: 10px;
			}
			&.unhandled {
				color: #FF3317;
				&:before {
					background: #FF3317;
				}
			}
		}
	}
}
</style>
