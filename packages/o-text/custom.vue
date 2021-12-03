<template lang="pug">
widget-normal(
	:value="value"
	:customConfig="customConfig"
)
	span(:style="{...config.config, fontSize: config.config.fontSize + 'px'}") {{ data.value }}
</template>
<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
}
</script>
