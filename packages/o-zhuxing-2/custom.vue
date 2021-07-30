<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	.o-zhuxing-2(:id="id")
</template>
<script lang="ts">
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import options from './options'

@Component({ components: { widgetNormal } })
export default class OZhuxing2 extends mixins(widgetNormalMixin) {
value = value
customConfig = customConfig
	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (this.id) {
			const data = { ...val }
			this.$nextTick(() => {
				this.instance = echarts.init(document.getElementById(this.id))
				this.setOption(data, this.config.config)
			})
		}
	}

	setOption(data, config) {
		const o = options(data, config)
		this.instance && this.instance.setOption(o)
	}

	
}
</script>
<style lang="scss" scoped>
.o-zhuxing-2 {
	height: 100%;
}
</style>
