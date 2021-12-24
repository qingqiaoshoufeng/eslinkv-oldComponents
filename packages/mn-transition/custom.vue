<template lang="pug">
widget-normal.b-tab-1.fn-flex(:value="value", :customConfig="customConfig")
	.mn-transition
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Editor } from '@eslinkv/core'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { config } from 'vue/types/umd'
@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	editor = Editor.Instance()
	customConfig = customConfig
	// change(id) {
	// 	id.length > 0 && this.editor.selectSceneIndex(id[0])
	// 	console.log(this.editor)
	// }
	async mounted() {
		await this.proxySencePage()
		this.getCurrentParamsValue()
		// this.jumpToSence(isload)
	}
	async proxyXmlOpen() {
		const nativeXmlOpen = XMLHttpRequest.prototype.open
		const { identity } = this.config.config
		XMLHttpRequest.prototype.open = function (...rest) {
			const insertParams = JSON.parse(
				sessionStorage.getItem('insertParams'),
			)
			const url = rest[1]
			console.log(url, 'insertParams')
			if (url.includes(identity)) {
				rest[1] = formatUrl(url, insertParams)
			}
			return nativeXmlOpen.call(this, ...rest)
		}

		function formatUrl(initUrl, insertParams) {
			let result = !initUrl.includes('?') ? initUrl + '?' : initUrl + '&'
			result = insertParams.reduce((current, paramsItem) => {
				return (current += `${paramsItem.name}=${paramsItem.value}&`)
			}, result)
			return result.substr(0, result.length - 1)
		}
	}
	async proxySencePage() {
		if (window.eslinkV.Editor.prototype.openWithClose) {
			return
		}
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		;(window.eslinkV.Editor.prototype as any).openSenceList = []
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const nativeOpenScene = (window.eslinkV.Editor.prototype as any)
			.openScene
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const nativeCloseScene = (window.eslinkV.Editor.prototype as any)
			.closeScene
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		interface setSessionStorageData {
			name: string
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			value: any
		}
		let _this = this
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		;(window.eslinkV.Editor.prototype as any).openWithClose = function (
			senceId: string,
			setSessionStorageData?: setSessionStorageData,
		) {
			console.log(111)
			if (setSessionStorageData) {
				sessionStorage.setItem(
					setSessionStorageData.name,
					JSON.stringify(setSessionStorageData.value),
				)
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			;(window.eslinkV.Editor.prototype as any).openSenceList.forEach(
				item => {
					nativeCloseScene.call(this, item)
				},
			)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			;(window.eslinkV.Editor.prototype as any).openSenceList = []
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			;(window.eslinkV.Editor.prototype as any).openSenceList.push(
				senceId,
			)
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			;(window.eslinkV.Editor.prototype as any).openSenceList.forEach(
				item => {
					nativeOpenScene.call(this, item)
				},
			)

			_this.bindOpencenceListChange(
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				(window.eslinkV.Editor.prototype as any).openSenceList,
			)
		}
	}
	async getCurrentParamsValue() {
		debugger
		let { url, parmas, responsePath } = this.config.config
		let isload = false
		if (url) {
			try {
				let res = await fetch(url)
				const result = await res.json()
				if (result.returnCode === '0006') {
					console.log(result.returnMessage)
					isload = false
				} else {
					parmas = responsePath.split('.').reduce((current, item) => {
						return current[item]
					}, result)
					sessionStorage.setItem(
						'insertParams',
						JSON.stringify(parmas),
					)
					sessionStorage.setItem(
						'currentCompany',
						JSON.stringify(parmas),
					)
					isload = true
					await this.proxyXmlOpen()
				}

				this.jumpToSence(isload)
			} catch (error) {
				console.log(error)
				isload = false
				this.jumpToSence(isload)
			}
		}

		// 	return result
		// }
	}

	jumpToSence(isload) {
		const { senceId, senceLogin } = this.config.config
		if (isload) {
			senceId && this.editor.selectSceneIndex(senceId)
			console.log(senceId)
		} else {
			senceLogin && this.editor.selectSceneIndex(senceLogin)
			console.log(senceLogin)
		}
		// this.editor.destroyScene(currentSence)
	}

	bindOpencenceListChange(currentOpencenceList: unknown): void {
		let Event = new CustomEvent('opencenceListChange', {
			detail: currentOpencenceList,
		})
		window.dispatchEvent && window.dispatchEvent(Event)
	}
}
</script>
<style lang="scss" scoped>
.mn-transition {
	height: 100%;
	width: 100%;
}
</style>
