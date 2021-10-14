<template lang="pug">
widget-normal(:value="value" :eventTypes="eventTypes")
	.fn-flex.flex-row.h-title-6
		.h-title-6-icon
		h2.pos-r.pointer(
			v-for="(k, i) in data",
			:class="{ active: tab === i }",
			@click="change(k, i)") {{ k.title }}
</template>
<script lang="ts">
import { widgetNormal, widgetNormalMixin } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { value } from './index.component'

@Component({
	components: { widgetNormal },
})
export default class extends widgetNormalMixin {
	value = value
	eventTypes = [{ key: 'click', label: '点击事件' }]
	tab = 0
	
	change (data, index) {
		this.tab = index
		this.__handleEvent__('click', data)
	}
}
</script>
<style lang="scss" scoped>
.h-title-6-icon {
	width: 34px;
	height: 34px;
	margin-right: 9px;
	background-image: url('./h-title1-1.svg');
}

.h-title-6 {
	align-items: center;
	padding-bottom: 8px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.4);

	h2 {
		margin-right: 24px;
		font-size: 24px;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.75);

		&.active {
			color: rgba(255, 255, 255, 1);

			&::before {
				position: absolute;
				bottom: -15px;
				width: 100%;
				height: 4px;
				color: rgba(255, 255, 255, 1);
				content: '';
				background: #0df;
			}
		}
	}
}
</style>
