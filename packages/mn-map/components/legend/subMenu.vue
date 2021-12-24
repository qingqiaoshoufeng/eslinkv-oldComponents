<template lang="pug">
.sub_menu
	.context
		//- .trigger_show(@click="triggerIsShow") {{ legendDataWithIsShow.isShow ? '▼' : '►' }}

		//- b-icon.icon(
		//- 	:name="legendDataWithIsShow.isShow ? 'icon-legend-open' : 'icon-legend-close'",
		//- 	@click.native="triggerIsShow"
		//- )
		img(
			:class="{ open: legendDataWithIsShow.isShow }",
			@click="triggerIsShow",
			:src="legendClose"
		)
		input.check(
			type="checkbox",
			name="vehicle",
			v-model="legendData.visible",
			@change="triggerChildren"
		)
		.name {{ legendData.label }}
	slot(v-if="legendDataWithIsShow.isShow")
</template>
<script lang="js">
import legendClose from "./legend-close.svg";
import bIcon from "../b-icon.vue";
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
		trggerCheck: {
			type: Function,
			require: true,
		},
		fatherData:{
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

			// eslint-disable-next-line no-debugger
			// debugger
			this.legendDataWithIsShow.isShow = !this.legendDataWithIsShow.isShow
			// this.legendDataWithIsShow.isShow = {...this.legendDataWithIsShow.isShow}
		},
		triggerChildren(e){
			// eslint-disable-next-line no-debugger
			// debugger
			this.legendData.children.forEach(item => {
				item.visible = e.target.checked
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.sub_menu {
	padding-left: 10px;
	align-items: center;
	.context {
		height: 25px;
		display: flex;
		align-items: center;
		img {
			height: 14px;
			width: 14px;
		}
		img.open {
			transform: rotate(90deg);
		}
		.check {
			background: #00ddff;
			position: relative;
			margin: 0 8px;
			// margin-top: 5px;
		}
		.check::before {
			content: '';
			width: 13px;
			height: 13px;
			display: block;
			/* 主色调/主色 */
			border: 1px solid #00ddff;
			box-sizing: border-box;
			background: rgba(0, 10, 64, 1);
			position: absolute;
			left: 0;
			top: 0;
		}
		input[type='checkbox']:checked:after {
			content: '';
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			position: absolute;
			background: #00ddff;
			width: 6px;
			height: 6px;

			/* 主色调/主色 */
			position: absolute;
			z-index: 99;
			background: #00ddff;
		}
		.trigger_show {
			line-height: 25px;
			font-size: 12px;
			color: rgba(0, 221, 255, 1);
		}
	}
}
</style>
