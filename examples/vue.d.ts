declare module 'vue/types/vue' {
	interface Vue {
		emitComponentUpdate: any
		configSource: any
		configValue: any
		parseConfigSource: any
		parseConfigValue: any
		data: any
		styles: any
	}
}
export {}
declare global {
	interface Window {
		eslinkV: any
		echarts: any
	}
}
