<template lang="pug">
widget-normal(:value="value", :customConfig="customConfig")
	img(:src="img")
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import { value, customConfig } from './index.component'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	img =
		'/node//515b2428-5f8e-4bb6-9b48-fef25b93ebfe/componentStatic/o-img/1.1.0/1640155816837.svg'
	imgList = {
		'0049': '/node//515b2428-5f8e-4bb6-9b48-fef25b93ebfe/componentStatic/o-img/1.1.0/1640155816837.svg',
		'004901':
			'/node//515b2428-5f8e-4bb6-9b48-fef25b93ebfe/componentStatic/o-img/1.1.0/1640155759892.svg',
		'004902':
			'/node//515b2428-5f8e-4bb6-9b48-fef25b93ebfe/componentStatic/o-img/1.1.0/1640155878631.svg',
		'004903':
			'/node//515b2428-5f8e-4bb6-9b48-fef25b93ebfe/componentStatic/o-img/1.1.0/1640155717417.svg',
	}
	editor = Editor.Instance()
	mounted() {
		let companyId = ''
		let newCompanyId = ''
		const insertParams = JSON.parse(sessionStorage.getItem('insertParams'))
		if (!insertParams) {
			return
		} else {
			companyId = insertParams[0].value
			this.img = this.imgList[companyId]
		}

		window.addEventListener('opencenceListChange', e => {
			if (e.detail) {
				newCompanyId = JSON.parse(
					sessionStorage.getItem('insertParams'),
				)[0].value

				if (companyId !== newCompanyId) {
					this.img = this.imgList[newCompanyId]
					companyId = newCompanyId
				}
			}
		})
	}
}
</script>
<style lang="scss" scoped>
img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	&.point {
		cursor: pointer;
	}
}
</style>
