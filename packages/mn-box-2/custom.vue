<template>
	<div class="widget-part pos-r" :style="styles" ref="box">
		<div class="mnboxs2">
			<div
				class="mnboxs2_border"
				:style="`
					background:${config.config.background};
					border-image: linear-gradient(${config.config.borderImage},rgba(0, 0, 0, 0),rgba(0, 0, 0, 0),${config.config.borderImage}) 2;	`"
			></div>
		</div>
	</div>
</template>
<script lang="ts">
import { widgetMixin } from '@eslinkv/vue2'
import { customConfig, value } from './index.component'

export default {
	mixins: [widgetMixin],
	created(): void {
		this.configValue = this.parseConfigValue(value, customConfig)
	},
}
</script>
<style lang="scss" scoped>
.mnboxs2 {
	width: 100%;
	height: 100%;
	position: relative;
	border-radius: 2px;
	overflow: hidden;
	.mnboxs2_border {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 1px solid;
	}
}
</style>
