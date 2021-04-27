<template lang="pug">
.widget-part.o-video(:style="styles")
	video.fn-block(
		:src="config && config.config.video",
		:controls="config.config.controls",
		:poster="config.config.poster",
		:loop="config.config.loop",
		:autoplay="config.config.autoplay")
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
.o-video {
	video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}
</style>
