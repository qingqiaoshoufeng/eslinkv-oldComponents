<template>
	<widget-normal :value="value" class="b-tab-3 fn-flex">
		<div
			class="bgbox"
			:class="{
				'left-bg': index === 0,
				'right-bg': index === 1,
				active: item.id.indexOf(editor.currentSceneIndex) !== -1,
			}"
			v-for="(item, index) in data"
			:key="index"
		>
			<div
				:class="{
					active: item.id.indexOf(editor.currentSceneIndex) !== -1,
					'left-title': index === 0,
					'right-title': index === 1,
				}"
				@click="change(item.id)"
			>
				<img v-if="!index" :src="!index ? left : right" alt="" />
				<span>{{ item.label }}</span>
				<img v-if="index" :src="!index ? left : right" alt="" />
			</div>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Editor } from '@eslinkv/core'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value } from './index.component'
import left from './left.svg'
import right from './right.svg'
@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	left = left
	right = right
	editor = Editor.Instance()

	change(id) {
		id.length > 0 && this.editor.selectSceneIndex(id[0])
	}
}
</script>
<style lang="scss" scoped>
.b-tab-3 {
	height: 100%;
	.bgbox {
		height: 100%;
		width: 100%;
		transform: skew(-45deg, 0deg);
	}
	.left-bg.active {
		// transform: skew(45deg, 0deg);
		background: linear-gradient(225deg, #fff 3.72%, rgba(7, 31, 54, 1) 80%);
		padding-left: 0px;
		padding-top: 2px;
		padding-bottom: 2px;
		box-sizing: border-box;
		margin-right: 10px;
	}
	.right-bg.active {
		// transform: skew(45deg, 0deg);
		background: linear-gradient(45deg, #fff 3.72%, rgba(7, 31, 54, 1) 80%);
		padding-left: 5px;
		padding-top: 2px;
		padding-bottom: 2px;
		box-sizing: border-box;
	}
	.left-title {
		margin-right: 6px;
		// transform: skew(-45deg, 0deg);
		text-align: right;
		background: linear-gradient(
			270deg,
			#285066 3.72%,
			rgba(40, 80, 102, 0) 100%
		);
		justify-content: flex-end;
		padding-right: 30px;
		img {
			transform: skew(45deg, 0deg);
			display: none;
		}
		span {
			transform: skew(45deg, 0deg);
			margin-left: 16px;
		}
	}
	.right-title {
		margin-right: 6px;
		// transform: skew(45deg, 0deg);
		text-align: right;
		background: linear-gradient(
			270deg,
			rgba(40, 80, 102, 0) 3.72%,
			#285066 100%
		);
		// transform: skew(-45deg, 0deg);
		justify-content: flex-start;
		padding-left: 30px;
		img {
			transform: skew(45deg, 0deg);
			display: none;
		}
		span {
			transform: skew(45deg, 0deg);
			margin-right: 16px;
		}
	}
	div {
		width: 100%;
		height: 100%;
		line-height: 74px;
		word-break: break-all;
		white-space: nowrap;
		text-align: center;
		// border: 2px solid #74fff2;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		span {
			font-family: PingFang SC;
			font-style: normal;
			font-weight: normal;
			font-size: 24px;
			line-height: 34px;
			/* identical to box height */

			display: flex;
			align-items: center;

			/* 白色0.75 */

			color: rgba(255, 255, 255, 0.75);
		}
		&.active {
			img {
				display: inline-block !important;
			}
			span {
				color: #fff;
			}
		}
	}
}
</style>
