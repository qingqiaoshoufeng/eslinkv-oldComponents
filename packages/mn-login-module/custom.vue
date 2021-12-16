<template lang="pug">
widget-normal.mn-login-module(:value="value", :customConfig="customConfig")
	input(type="text", placeholder="用户名", v-model="config.config.username")
	input(type="password", placeholder="密码", v-model="config.config.password")
	button(@click="doLogin") 登录
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	editor = Editor.Instance()
	doLogin(): void {
		const { url = '', scenceId = '', jumpUrl = '' } = this.config.config
		if (!url) {
			console.warn('缺少登录请求地址')
			return
		}
		fetch(url)
			.then(async res => {
				console.log(res)
				if (res.status >= 200 || res.status < 300) {
					const json = await res.json()
					if (json.returnCode === '0000') {
						if (jumpUrl === '' && scenceId === '') {
							console.log('缺少场景id或跳转url')
						}
						if (scenceId !== '') {
							this.editor.selectSceneIndex(scenceId)
						}
						if (jumpUrl !== '') {
							location.href = jumpUrl
						}
					} else {
						console.error('账号或密码错误')
					}
				} else {
					console.error('接口请求失败')
				}
			})
			.catch(err => {
				console.error('接口请求失败', err)
			})
	}
}
</script>
<style lang="scss" scoped>
.mn-login-module {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	input {
		width: 100%;
		height: 62px;
		outline: none;
		border: none;
		background-image: none;
		-webkit-box-shadow: none;
		-moz-box-shadow: none;
		box-shadow: none;
		border-radius: 10px;
		font-size: 18px;
		background-color: #3036c6;
		padding-left: 26px;
		&::placeholder {
			font-size: 18px;
			color: #ffffff;
		}
	}
	button {
		width: 100%;
		height: 62px;
		border-radius: 10px;
		color: #3036c6;
		font-size: 24px;
	}
}
</style>
