declare module 'vue/types/vue' {
	interface Vue {
		$api: any
		$agent: any
		$sysApi: any

		emitComponentUpdate: any
		kanboardEditor: any
		configSource: any
		configValue: any
		parseConfigSource: any
		parseConfigValue: any
		data: any
		styles: any
	}
}
