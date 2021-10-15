<template>
	<div class="b-icon">
		<svg
			class="svg-icon"
			aria-hidden="true"
			v-on="$listeners"
			:style="{ fontSize: size + 'px' }"
		>
			<use :xlink:href="nameComputed" />
		</svg>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'BIcon',
	props: {
		name: {
			type: String,
			required: true,
		},
		prefix: {
			type: String,
			default: 'hzzh',
		},
		size: {
			type: Number,
			default: 60,
		},
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
}
</style>
