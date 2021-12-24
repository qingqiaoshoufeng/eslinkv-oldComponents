<template>
	<widget-normal
		:value="value"
		:customConfig="customConfig"
		:eventTypes="eventTypes"
	>
		<div class="o-select-3 fn-flex" v-if="selectList.length > 1">
			<div class="select-box">
				<h2
					class="fn-flex flex-row"
					@click="showOptions = !showOptions"
					:class="{ active: showOptions }"
				>
					<span>{{ selectLabel }}</span>
					<img src="./select.svg" :class="{ active: showOptions }" />
				</h2>
			</div>
			<ul
				class="pos-a d-scrollbar"
				v-if="showOptions"
				:class="{ active: showOptions }"
			>
				<li
					class="pointer"
					v-for="(item, index) in selectList"
					@click="change(item)"
					:key="index"
				>
					{{ item.label }}
				</li>
			</ul>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { customConfig, eventTypes } from './index.component'
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'
import { Editor } from '@eslinkv/core'

@Component({ components: { widgetNormal } })
export default class extends widgetNormalMixin {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click1', label: '点击事件' }]
	editor = Editor.Instance()
	showOptions = false
	selectValue = '0049'
	selectLabel = '美能集团'
	selectList = []
	change(row) {
		this.selectValue = row.value
		this.selectLabel = row.label
		this.__handleEvent__('click1', row)
		this.showOptions = !this.showOptions
		console.log(
			window.eslinkV.Editor.prototype.openSenceList[0],
			'this.openSenceLit',
		)
		const currentSence = window.eslinkV.Editor.prototype.openSenceList[0]
		if (currentSence == 'sqju2e5pyv') {
			window.eslinkV.Editor.prototype.openWithClose.call(
				this.editor,
				'oqzqtu67u3n',
				{
					name: 'insertParams',
					value: [{ name: 'companyId', value: this.selectValue }],
				},
			)
		} else {
			window.eslinkV.Editor.prototype.openWithClose.call(
				this.editor,
				'sqju2e5pyv',
				{
					name: 'insertParams',
					value: [{ name: 'companyId', value: this.selectValue }],
				},
			)
		}
	}
	mounted() {
		const currentCompanyId = JSON.parse(
			sessionStorage.getItem('currentCompany'),
		)
		const currentInsertId = JSON.parse(
			sessionStorage.getItem('insertParams'),
		)
		if (currentCompanyId && currentCompanyId[0].value === '0049') {
			this.selectList = [
				{
					label: '美能集团',
					value: '0049',
				},
				{
					label: '神木公司',
					value: '004902',
				},
				{
					label: '宝鸡公司',
					value: '004903',
				},
				{
					label: '韩城公司',
					value: '004901',
				},
			]
			this.selectLabel = this.selectList.find(item => {
				return item.value === currentInsertId[0].value
			}).label
		} else {
			this.selectList = []
		}
	}
}
</script>
<style lang="scss" scoped>
.o-select-3 {
	height: 100%;
	background: #001a77;
	border-radius: 4px;
	.select-box {
		height: 100%;
		width: 100%;
		display: flex;
	}
	ul {
		top: 100%;
		right: 0px;
		width: 100%;
		background: #001a77;
		border-radius: 4px;

		&.active {
			height: auto;
			max-height: 207px;
			padding: 4px 0;
			overflow-y: auto;
			// border: 1px solid #0df;
		}
	}

	h2 {
		align-items: center;
		width: 100%;
		font-weight: normal;
		color: #fff;
		border-radius: 4px;
		border: 1px solid #0057a9;

		// &.active {
		// 	border: 1px solid #0df;
		// }

		span {
			margin-right: auto;
			margin-left: 8px;
			text-align: left;
			font-size: 18px;
			line-height: 24px;
			flex: 3;
		}

		img {
			width: 8px;
			height: 8px;
			margin-right: 8px;
			transition: all 0.3s;
			&.active {
				transform: rotate(180deg);
			}
		}
	}

	li {
		height: 32px;
		text-align: left;
		padding-left: 8px;
		font-size: 18px;
		line-height: 32px;
		color: #fff;
		transition: all 0.3s;

		&:hover {
			background: #0057a9;
		}

		&.active {
			background: #0057a9;
		}

		&:last-child {
			border-bottom: none;
		}
	}
}
</style>
