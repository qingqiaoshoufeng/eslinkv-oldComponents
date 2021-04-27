<template lang="pug">
.widget-part(:style="styles", v-if="data")
	.fn-flex.flex-row.o-title-4.pos-r
		.o-title-4-icon-left
		.o-title-4-icon-right
		.o-title-4-icon
		h2 {{ config.config.title ? config.config.title : data.title }}
</template>
<script lang="ts">
const { widgetMixin } = eslinkV
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'

@Component
export default class extends mixins(widgetMixin) {
	async created() {
		this.configValue = this.parseConfigValue(value, customConfig)
	}
}
</script>
<style lang="scss" scoped>
.o-title-4-icon-left {
	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 2px;
		height: 2px;
		left: 0;
		background-color: rgba(0, 221, 255, 1);
	}
	&:before {
		top: 0;
	}
	&:after {
		bottom: 0;
	}
}
.o-title-4-icon-right {
	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 2px;
		height: 2px;
		background-color: rgba(0, 221, 255, 1);
		right: 0;
	}
	&:before {
		top: 0;
	}
	&:after {
		bottom: 0;
	}
}
.o-title-4-icon {
	margin: 0 8px;
	width: 24px;
	height: 16px;
	background-size: 24px 16px;
	background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAARCAYAAADHeGwwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJTSURBVHgBtVMxaFNRFD03P0apVAofOkiF1KRRQSGDi07Fri4drJt1dWqDm4tObtJkcq3rX1wcDbplEXQoWFNDhBSHYmnEUmxN8jzv/f/ff78/W9sD73Pfu7xz7j33P8G2msEhJhBjD9u4LQcm/qYewsMMEgQoS89EHbUGQdVmBqihIl9wDDn0sYMhBRQmzbqIEpTyTHaE9yTRAhWzFJ7gk5qIbja4r3LNm+XhLT6rqazATTmiQM+enEMBm7hi4huyS5HA5gQ+LmHJxLPyg8Q1h6vI3FpWICYCO0lEfHxX0yaekxaJms6NO7RnwcRlWWeu4fA9Zm41K6BRwk/kcWD3I1y2dvzGO357zr37LCDs0sMLduZ6/xxtVc0KiAyxjw6Jh1HGs/PQQ/+H1yQKC1BmZuE8ZqXP80We9iOmKXceObeds5iHYBzC9qedkx79Dme0pZZ4a8ERClCSZnSvzv2Kc6+WGytwHr9S+xGrTQhbqZzi0GN4WD+WW84KBPR8H2W7z/EJHXE2GtpzofeJWDgbjS49H9H7BH0KLmYFbtFz7X2MQ75sPRsNHw9Yle9UHES/ODi7OrT3SWGrejb5FHn47/vOyY4l0P/+EHeRtN9EUVpR9SusftnJ1Un+JmwyxoYq4ALrh1N7WTZM9FX57OqlQ7DLB/gsIi+SvOvc63LoV5NGNLTvHq457Q3wF20Ta98LeGpz2vcBXkXk2vcPDvke795z9pHA6fleM2/CQf6Evj8yp2GuEfvuQrCpJlMn1+WPjTuqksqVpG3jLTWfys3JR4zBfwIW4TFn4P53AAAAAElFTkSuQmCC');
}
.o-title-4 {
	align-items: center;
	height: 100%;
	background-color: rgba(2, 48, 102, 0.5);
	h2 {
		font-size: 24px;
		font-weight: 600;
		color: #fff;
	}
}
</style>
