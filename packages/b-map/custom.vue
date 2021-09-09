<template>
	<!-- 消息提醒 -->
	<div class="map-box" v-if="inPreview" :style="{ zIndex: 9 }">
		<Message />
		<MapContainer @mapInit="mapInit" />
	</div>
	<div class="widget-part pos-r" v-else :style="styles">
		<img class="placeholder-map" src="/cdn/hangran-map/amap.jpg" alt="" />
	</div>
</template>
<script>
import Vue from 'vue'
import PortalVue from 'portal-vue'
import MapContainer from './MapContainer/index'
import Message from './components/Message/'
import { value } from './index.component.ts'
import { widgetMixin } from '@eslinkv/vue2'
import { loadJs } from '../../examples/utils'

Vue.use(PortalVue)

export default {
	name: 'HRMap',
	components: {
		MapContainer,
		Message,
	},
	props: {
		preview: {
			type: Boolean,
			default: false,
		},
	},
	mixins: [widgetMixin],
	data() {
		return {
			ready: false,
		}
	},
	methods: {
		resetMap() {
			this.ready = false
			setTimeout(() => {
				this.ready = true
			}, 5000)
		},
    mapInit () {
      this.$nextTick(() => {
        this.ready = true
        this.configValue = this.parseConfigValue(value)
      })
    }
	},
	async created() {
		await loadJs('//at.alicdn.com/t/font_2145957_0n1yu8oz39xr.js', 'iconfont')
	},
	mounted() {
		if (!this.inPreview) {
		  this.ready = true
		  this.configValue = this.parseConfigValue(value)
		}
		// 以防地图加载不出hock处理
		window.resetMap = this.resetMap.bind(this)
	},
}
</script>

<style lang="scss" scoped>
.placeholder-map {
	width: 100%;
	height: 100%;
}

.map-box {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	overflow: hidden;
	text-align: left;
	line-height: 1.5;
}
</style>

<style lang="scss">
@keyframes fadeInRight1 {
	0% {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	to {
		opacity: 1;
		transform: translateZ(0);
	}
}
.animate-fadeInRight {
	animation-name: fadeInRight1;
}
.amap-marker-content {
	& > div {
		& > div:not(.no-hover-effect):hover {
			transform: scale(1.1);
		}
	}
}

.amap-marker {
	backface-visibility: hidden;
	pointer-events: none !important;

	> div {
		> div {
			pointer-events: all;
		}
	}
}

.amap-markers {
	z-index: 1100 !important;
}

.amap-logo {
	display: none !important;
}

.amap-copyright {
	display: none !important;
}
</style>
