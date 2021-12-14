<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.mn-left-content
		.left
			repair-number(:number="data.rushRepair", :label="config.config.title1")
			show-number(
				:number="data.inspectionMileage",
				:label="config.config.title4",
				:unit="config.config.unit")
		.right
			repair-number(
				:number="data.keepRepair",
				:label="config.config.title2",
				type="keep")
			ratio-number(
				:ratio="data.changeRatio",
				:label="config.config.title3",
				isRatio)
			ratio-number(
				:number="data.troubleProcessing",
				:label="config.config.title5",
				:ratio="data.troubleRatio")
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'
import RepairNumber from './components/reapir-number.vue'
import ShowNumber from './components/show-number.vue'
import RatioNumber from './components/ratio-number.vue'

@Component({
	components: { widgetNormal, RepairNumber, ShowNumber, RatioNumber },
})
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	editor = Editor.Instance()
}
</script>
<style lang="scss" scoped>
.mn-left-content {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	.left,
	.right {
		height: 100%;
		width: calc(50%-13px);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
}
</style>
