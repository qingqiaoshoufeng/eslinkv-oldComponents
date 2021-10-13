<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.fn-flex.flex-row.hz-nav
		.nav1
		.nav2
		.nav3
		.nav4
		.nav5
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
<style lang="scss" scoped>
.hz-nav {
	width: 100%;
	height: 100%;
	background: url(./nav1.svg) no-repeat top center;
	background-size: 100% 100%;
}
</style>
