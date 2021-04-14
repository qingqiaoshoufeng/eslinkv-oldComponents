<template lang="pug">
.widget-part(:style="styles" v-if="data")
	ul.list
		li(
			v-for="(k, i) in data"
			:key="i"
			@click="change(k)"
			:class="{active: k.value === selectValue}"
		) {{ k.label }}
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'

@Component
export default class Widget extends mixins(widgetMixin) {
	selectValue = ''

	change (row) {
		this.selectValue = row.value
		this.emitComponentUpdate(row.value)
	}
	
	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
		this.selectValue = this.configValue.config.defaultValue
	}

	mounted() {
		this.emitComponentUpdate(this.selectValue)
	}
}
</script>
<style lang="scss" scoped>
.list {
	display: flex;
	li {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		flex: none;
		padding: 4px 0;
		margin-right: 16px;
		font-size: 18px;
		color: rgba(255, 255, 255, 0.75);
		
		&.active {
			font-weight: 600;
			color: #FEFFFF;
			border-bottom: 2px solid #00DDFF;
		}
	}
}
</style>
