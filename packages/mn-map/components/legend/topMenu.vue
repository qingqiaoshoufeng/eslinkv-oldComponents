<template lang="pug">
.top_menu
	.context
		img(
			:class="{ open: legendDataWithIsShow.isShow }",
			@click="triggerIsShow",
			:src="legendClose"
		)
		.name {{ legendData.label }}
	slot(v-if="legendDataWithIsShow.isShow")
</template>
<script lang="js">
import  bIcon  from "../b-icon.vue";
import legendClose from "./legend-close.svg";
export default {
	components:{
		bIcon
	},
	props: {
		legendData: {
			type: Object,
			default() {
				return {}
			},
		},
	},
	data(){
		return {
			legendDataWithIsShow:{
				...this.legendData,isShow:true
			},
			legendClose,

		}
	},
	methods:{
		triggerIsShow(){
			this.legendDataWithIsShow.isShow = !this.legendDataWithIsShow.isShow
			// this.legendDataWithIsShow = {...this.legendDataWithIsShow.isShow}
		}
	}
}
</script>

<style lang="scss" scoped>
.top_menu {
	// padding-left: 40px;
	align-items: center;
	.context {
		height: 25px;
		display: flex;
		align-items: center;
		img {
			height: 14px;
			width: 14px;
			margin-right: 4px;
		}
		img.open {
			transform: rotate(90deg);
		}
		.trigger_show {
			line-height: 25px;
			font-size: 12px;
			color: rgba(0, 221, 255, 1);
		}
	}
}
</style>
