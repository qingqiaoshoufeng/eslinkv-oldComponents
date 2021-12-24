<template lang="pug">
.legend_box
	component(
		:is="item.componentType",
		:legendData="item",
		:fatherData="fatherData",
		v-for="(item, index) in legendData",
		:key="index",
		:trggerCheck="trggerCheck",
		:triggerFatherCheck="triggerFatherCheck",
		:singleChoice="singleChoice"
	) 
		Legend(
			v-if="item.children && item.children.length",
			:legendData="item.children",
			:fatherData="item || null",
			:singleChoice="singleChoice"
		)
</template>

<script>
import menuItem from './menuItem.vue'
import subMenu from './subMenu.vue'
import topMenu from './topMenu.vue'
export default {
	name: 'Legend',
	components: {
		menuItem,
		topMenu,
		subMenu,
	},
	props: {
		legendData: {
			type: Array,
			default() {
				return []
			},
		},
		trggerCheck: {
			type: Function,
			require: true,
		},
		fatherData: {
			type: Object,
			default() {
				return null
			},
		},
		singleChoice: {
			type: Boolean,
			default: false,
		},
	},
	mounted() {
		console.log(this.legendData)
	},
	computed: {},
	methods: {
		triggerFatherCheck(value) {
			this.fatherData.isChecked = value
		},
	},
}
</script>
<style lang="scss" scoped>
.legend_box {
	background: #000a40;
}
</style>
