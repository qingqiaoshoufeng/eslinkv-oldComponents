<template lang="pug">
	.widget-part(:style="styles" v-if="data")
		.left.active(@click="back")
		.main {{ time }}
		.right(@click="next" :class="{active: !disabled}")
</template>
<script lang="ts">
import { widgetMixin } from 'eslinkv-sdk'
import { customConfig, value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
@Component
export default class OSelect5 extends mixins(widgetMixin) {
	time:number|string = 0

	@Watch('time', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.__handleClick__(val)
		}
	}
	
	get disabled () {
		return this.time === this.formatTime(new Date())
	}

	back() {
		let year = new Date(this.time).getFullYear()
		let month:any = new Date(this.time).getMonth()
		if (month === 0) {
			month = 12
			year--
		}
		month = month > 9 ? month : `0${month}`
		this.time = `${year}.${month}`
	}

	next() {
		if (this.disabled) return
		let year = new Date(this.time).getFullYear()
		let month:any = new Date(this.time).getMonth() + 2
		if (month === 13) {
			month = 1
			year++
		}
		month = month > 9 ? month : `0${month}`
		this.time = `${year}.${month}`
	}
	
	formatTime (date, offset = 0) {
		let year = date.getFullYear()
		let month:any = date.getMonth() + 1
		if (offset) {
			month += offset
			if (month <= 0) {
				year--
				month += 12
			} else if (month > 12) {
				year++
				month %= 12
			}
		}
		month = month > 9 ? month : `0${month}`
		return `${year}.${month}`
	}

	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
		this.time = this.formatTime(new Date(), this.configValue.config.offset)
	}
}
</script>
<style lang="scss" scoped>
.widget-part {
	display: flex;
	align-items: center;
	justify-content: center;
	
	.main {
		width: 86px;
		height: 32px;
		text-align: center;
		line-height: 32px;
		background: #0057A9;
		border-radius: 4px;
		font-size: 18px;
		color: #FFFFFF;
	}

	.left {
		width: 0;
		height: 0;
		border-top: 8px solid transparent;
		border-right: 8px solid rgba(255, 255, 255, 0.4);
		border-bottom: 8px solid transparent;
		margin-right: 12px;
		cursor: pointer;
		
		&.active {
			border-right-color: #00DDFF;
		}
	}

	.right {
		width: 0;
		height: 0;
		border-top: 8px solid transparent;
		border-bottom: 8px solid transparent;
		border-left: 8px solid rgba(255, 255, 255, 0.4);
		margin-left: 12px;
		cursor: pointer;

		&.active {
			border-left-color: #00DDFF;
		}
	}
}
</style>
