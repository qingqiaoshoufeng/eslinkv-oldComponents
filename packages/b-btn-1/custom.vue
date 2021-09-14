<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		:eventTypes="eventTypes"
	>
		<div class="b-btn-1" @click="handleClick">
			<img src="./snapshot.png" alt="" />
		</div>
	</widget-normal>
</template>
<script>
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

export default {
	name: 'b-btn-1',
	mixins: [widgetNormalMixin],
	components: { widgetNormal },
	data() {
		return {
			eventTypes: [
				{ key: 'click', label: '点击事件-隐藏' },
				{ key: 'click1', label: '点击事件-显示' },
			],
			value,
			customConfig,
			showFlag: true,
		}
	},
	methods: {
		handleClick() {
			if (this.showFlag) {
				// 隐藏
				this.__handleEvent__('click')
				this.showFlag = false
			} else {
				this.__handleEvent__('click1')
				// 显示
				this.showFlag = true
			}
		},
	},
}
</script>
<style lang="scss" scoped>
.b-btn-1 {
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
