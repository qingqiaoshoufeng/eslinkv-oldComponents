<template lang="pug">
.menu_item
	.context
		input.check(
			type="checkbox",
			name="vehicle",
			value="Bike",
			v-model="legendData.visible",
			@change="triggerFather",
			:disabled="legendData.visible && singleChoice"
		)
		b-icon.icon(
			:name="legendData.icon",
			:size="legendData.size",
			v-if="legendData.icon"
		)
		.name {{ legendData.label }}
	slot(v-if="legendData.isShow")
</template>
<script lang="js">
import  bIcon  from "../b-icon.vue";
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
		triggerFatherCheck:{
			type: Function,
			require: true,
		},
		fatherData:{
			type: Object,
			default() {
				return {}
			},
		},
		singleChoice: {
			type: Boolean,
			default:false,
		},
	},
	data(){
		return {
			legendDataWithIsShow:{
				...this.legendData,isShow:false
			}
		}
	},
	methods:{
		trggerIsShow(){
			this.legendDataWithIsShow.isShow = !this.legendDataWithIsShow.isShow
		},
		triggerFather(){
			// debugger
			// eslint-disable-next-line no-debugger
			console.log(this.fatherData);
			const isAllChecked = !!this.fatherData.children.find(item=>item.visible === true)

			// eslint-disable-next-line vue/no-mutating-props
			this.fatherData.visible = isAllChecked
			if(this.singleChoice){
				// debugger

				this.fatherData.children.forEach(item => {
					item.visible = false
					// const flag =
				});
				// eslint-disable-next-line vue/no-mutating-props
				this.legendData.visible = true
			}


		}
	}

}
</script>

<style lang="scss" scoped>
.menu_item {
	align-items: center;
	padding-left: 8px;
	.context {
		height: 25px;
		display: flex;
		align-items: center;
		margin-left: 10px;
		.check {
			background: #00ddff;
			position: relative;
			// margin-top: 5px;
			display: block;
			margin-left: 8px;
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
			width: 7px;
			height: 7px;

			/* 主色调/主色 */
			position: absolute;
			z-index: 99;
			background: #00ddff;
		}
	}
	.icon {
		margin: 0 8px;
	}
	.value {
	}
}
</style>
