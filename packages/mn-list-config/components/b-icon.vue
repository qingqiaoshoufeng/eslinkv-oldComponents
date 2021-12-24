<template>
	<svg
		class="svg-icon"
		aria-hidden="true"
		v-on="$listeners"
		:style="{ fontSize: size + 'px' }"
	>
		<use :xlink:href="nameComputed" />
	</svg>
</template>

<script>
import { loadJs } from '../../../examples/utils.js'
export default {
	name: 'SvgIcon',
	props: {
		name: {
			type: String,
			required: true,
		},
		prefix: {
			type: String,
			default: '',
		},
		size: {
			type: Number,
			default: 20,
		},
	},
	created() {
		loadJs(
			// '//at.alicdn.com/t/font_2801166_h51o8309r1h.js',
			'//at.alicdn.com/t/font_2801166_juvllw6s0ve.js',
			'huachen_iconfont',
		)
	},
	computed: {
		nameComputed() {
			const { prefix, name } = this
			if (prefix) {
				return `#${prefix}-${name}`
			} else {
				return `#${name}`
			}
		},
	},
}
</script>

<style scoped>
.svg-icon {
	width: 1em;
	height: 1em;
	overflow: hidden;
	vertical-align: middle;
	fill: currentColor;
	margin-left: 30px;
	margin-right: 18px;
}
</style>
