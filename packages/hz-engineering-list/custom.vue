<template lang="pug">
widget-normal(
	:value="value",
	:customConfig="customConfig",
	:eventTypes="eventTypes")
	.select-list
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
							:name="item.status === 0 ? 'hzzh-a-Group107' : item.status === 1 ? 'hzzh-a-Group108' : ''",
							:size="23")
						.name {{ item.content }}
						.time {{ item.time }}
					.row2
						.address {{ item.address }}
						.state(:class="item.status ===  ? 'unhandled' : ''") {{ item.statusText }}
		.empty(v-if="!list || !list.length")
			.text 暂无数据
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
		// if (this.timer) clearInterval(this.timer)
		// if (this.timerout) clearTimeout(this.timerout)
		// this.timerout = setTimeout(() => {
		// 	let { offsetHeight, scrollHeight } = this.$refs.hidden.$el
		// 	if (scrollHeight > offsetHeight) {
		// 		this.start()
		// 	}
		// }, 1000)
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
		// this.list = []
		if (val === 1) {
			this.__handleEvent__('click2', val)
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
.select-list {
	height: 100%;
	display: flex;
	flex-direction: column;
}
.list {
	position: relative;
	.list-group {
		display: block;
		overflow: hidden;
		height: 100%;
		.list-item {
			padding: 10px 15px 10px 0;
			// background: rgba(0, 51, 105, 0.6);
			margin-top: 11px;
			transition: all 1200ms;
			cursor: pointer;
			.row1 {
				display: flex;
				align-items: center;
				.icon {
					margin-left: 21px;
					margin-right: 18px;
				}
				.name {
					width: 320px;
					text-align: left;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 24px;
					line-height: 33px;
					color: #feffff;
				}
				.time {
					flex: 1;
					font-size: 16px;
					line-height: 16px;
					text-align: right;
					color: #ffffff;
				}
			}
			.row2 {
				margin-top: 9px;
				display: flex;
				padding-left: 64px;
				.address {
					width: 350px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					font-size: 16px;
					line-height: 22px;
					text-align: left;
					color: rgba(255, 255, 255, 0.75);
				}
				.state {
					flex: 1;
					font-size: 16px;
					line-height: 22px;
					text-align: right;
					color: #00a3ff;
					position: relative;
					&:before {
						content: '';
						display: block;
						position: absolute;
						width: 8px;
						height: 8px;
						border-radius: 50%;
						background: #00a3ff;
						right: 40px;
						top: 8px;
					}
					&.unhandled {
						color: #e5615b;
						&:before {
							background: #e5615b;
						}
					}
				}
			}
		}
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
.empty {
	position: relative;
	height: 100%;
	color: #fff;
	font-size: 24px;
	.text {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
}
</style>
