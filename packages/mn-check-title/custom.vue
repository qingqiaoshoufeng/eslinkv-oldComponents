<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		class="b-tab-3 fn-flex"
	>
		<div
			class="bgbox"
			:class="{
				'left-bg': index === 0,
				'right-bg': index === 1,
				active: item.id.indexOf(editor.currentSceneIndex) !== -1,
			}"
			:style="{
				background:
					item.id.indexOf(editor.currentSceneIndex) !== -1 && index
						? `linear-gradient(90deg,${config.config.bdStartColor} 3.72%, ${config.config.bdEndColor} 100%)`
						: item.id.indexOf(editor.currentSceneIndex) !== -1 &&
						  index == 0
						? `linear-gradient(270deg,${config.config.bdStartColor} 3.72%, ${config.config.bdEndColor} 100%)`
						: '',
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
				:style="{
					background: index
						? `linear-gradient(90deg,${config.config.bgStartColor} 3.72%, ${config.config.bgEndColor} 100%)`
						: index == 0
						? `linear-gradient(270deg,${config.config.bgStartColor} 3.72%, ${config.config.bgEndColor} 100%)`
						: '',
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
import { value, customConfig } from './index.component'
import left from './left.svg'
import right from './right.svg'
@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	left = left
	right = right
	editor = Editor.Instance()
	customConfig = customConfig
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
		border-radius: 4px;
		transform: skew(-30deg, 0deg);
	}
	.left-bg.active {
		// transform: skew(45deg, 0deg);
		background: linear-gradient(
			270deg,
			#00ddff 3.74%,
			rgba(0, 87, 169, 0) 100%
		);
		padding-left: 0px;
		padding-top: 1px;
		padding-bottom: 1px;
		box-sizing: border-box;
		margin-right: 8px;
	}
	.right-bg.active {
		// transform: skew(45deg, 0deg);
		background: linear-gradient(
			90deg,
			#00ddff 3.72%,
			rgba(0, 87, 169, 0) 100%
		);
		padding-left: 1px;
		padding-top: 1px;
		padding-bottom: 1px;
		margin-left: 8px;
		box-sizing: border-box;
	}
	.left-title {
		border-radius: 3px;
		margin-right: 2px;
		// transform: skew(-45deg, 0deg);
		text-align: right;
		background: linear-gradient(
			270deg,
			rgba(0, 87, 169, 0.7) 3.74%,
			rgba(0, 87, 169, 0) 100%
		);
		justify-content: flex-end;
		padding-right: 16px;
		img {
			transform: skew(30deg, 0deg);
			display: none;
		}
		span {
			transform: skew(30deg, 0deg);
			margin-left: 8px;
		}
	}
	.right-title {
		// margin-left: 2px;
		// transform: skew(45deg, 0deg);
		border-radius: 3px;
		text-align: right;
		background: linear-gradient(
			270deg,
			rgba(0, 87, 169, 0) 3.74%,
			rgba(0, 87, 169, 0.7) 100%
		);
		justify-content: flex-start;
		padding-left: 16px;
		img {
			transform: skew(30deg, 0deg);
			display: none;
		}
		span {
			transform: skew(30deg, 0deg);
			margin-right: 8px;
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
			font-size: 16px;
			line-height: 22px;
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
