<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		:eventTypes="eventTypes"
	>
		<div class="mn-btn" @click="handleClick">
			<i
				class="iconfont icon-a-fangda2"
				:style="{
					fontSize: `${config.config.fontSize}px`,
					color: config.config.color,
				}"
			></i>
		</div>
	</widget-normal>
</template>
<script>
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
export default {
	name: 'mn-btn',
	mixins: [widgetNormalMixin],
	components: { widgetNormal },
	data() {
		return {
			eventTypes: [{ key: 'click', label: '点击事件' }],
			value,
			customConfig,
		}
	},
	methods: {
		handleClick() {
			this.__handleEvent__('click')
		},
	},
}
</script>
<style lang="scss" scoped>
@import url('//at.alicdn.com/t/font_2801166_juvllw6s0ve.css');
.mn-btn {
	width: 100%;
	height: 100%;
	color: #00ddff;
	i {
		cursor: pointer;
	}
}
</style>
