<template lang="pug">
widget-normal.b-bg-1(:value="value")
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
}
</script>
<style lang="scss" scoped>
.b-bg-1 {
	pointer-events: none;
	background: linear-gradient(90deg, #071f36 50.01%, rgba(7, 31, 54, 0) 100%);
}
</style>
