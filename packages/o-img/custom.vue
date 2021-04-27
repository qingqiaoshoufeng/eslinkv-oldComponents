<template lang="pug">
.widget-part.o-img(:style="styles")
	img(:src="config && config.config.img")
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetMixin } from 'eslinkv-sdk'

@Component
export default class OBar2 extends mixins(widgetMixin) {
	created() {
		this.configValue = this.parseConfigValue(value, customConfig)
	}
}
</script>
<style lang="scss" scoped>
.o-img {
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
