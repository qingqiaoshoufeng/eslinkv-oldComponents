<template>
	<widget-normal :value="value" :customConfig="customConfig" :eventTypes="eventTypes">
		<div class="tab">
			<div
				class="swiper"
				@click="back"
				:class="{ active: selectIndex > 0 }"
			>
				<span class="left"></span>
			</div>
			<div class="scroll-wrapper">
				<ul
					class="scroll fn-flex"
					:style="{ transform: `translateX(-${offsetX}px)` }"
					ref="scroll"
				>
					<li
						class="pointer"
						v-for="k in data"
						:class="{ active: k.label === selectLabel }"
						:key="k.label"
						@click="change(k)"
					>
						{{ k.label }}
					</li>
				</ul>
			</div>
			<div
				class="swiper"
				@click="next"
				:class="{ active: selectIndex < data.length }"
			>
				<span class="right"></span>
			</div>
		</div>
	</widget-normal>
</template>
<script lang="ts">
import { widgetNormalMixin, widgetNormal } from '@eslinkv/vue2'
import { customConfig, value } from './index.component'
import { Component, Watch } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
@Component({ components: { widgetNormal } })
export default class OSelect5 extends mixins(widgetNormalMixin) {
	value = value
	customConfig = customConfig
	eventTypes = [{ key: 'click', label: '点击事件' }]
	selectIndex = 0
	offsetX = 0
	selectLabel = ''
	selectValue = ''

	back() {
		if (this.selectIndex === 0) return
		this.selectIndex--
		this.getOffset()
	}
	next() {
		if (this.selectIndex === this.data.length) return
		this.selectIndex++
		this.getOffset()
	}
	change(item) {
		this.selectValue = item.value
		this.selectLabel = item.label
		this.__handleEvent__('click', item)
	}
	getOffset() {
		if (!this.$refs.scroll) return
		const n =
			(this.$refs.scroll.scrollWidth - this.$refs.scroll.offsetWidth) /
			this.$refs.scroll.offsetWidth
		const extra =
			(this.$refs.scroll.scrollWidth - this.$refs.scroll.offsetWidth) %
			this.$refs.scroll.offsetWidth
		if (n <= this.selectIndex) {
			this.offsetX = extra
		} else {
			this.offsetX = this.$refs.scroll.offsetWidth * this.selectIndex
		}
	}

	@Watch('data', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			val.forEach(item => {
				if (item.value === this.selectValue) {
					this.selectLabel = item.label
				}
			})
		}
	}

	@Watch('config.config.defaultValue', { deep: true, immediate: true })
	onDataChange(val) {
		if (val) {
			this.selectValue = this.config.config.defaultValue
			this.data.forEach(item => {
				if (item.value === this.selectValue) {
					this.selectLabel = item.label
					this.__handleEvent__('click', item)
				}
			})
		}
	}

	
}
</script>
<style lang="scss" scoped>
.tab {
	display: flex;
	align-items: center;
	justify-content: space-between;

	.swiper {
		display: flex;
		flex: none;
		align-items: center;
		justify-content: center;
		width: 12px;
		height: 20px;
		background: #0057a9;
		border-radius: 2px;

		&.active {
			border: 1px solid #0df;
		}

		> .left {
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-right: 6px solid rgba(255, 255, 255, 0.75);
			border-bottom: 6px solid transparent;
		}

		> .right {
			width: 0;
			height: 0;
			border-top: 6px solid transparent;
			border-bottom: 6px solid transparent;
			border-left: 6px solid rgba(255, 255, 255, 0.75);
		}
	}

	.scroll-wrapper {
		margin: 0 8px;
		overflow: hidden;
	}

	.scroll {
		flex-wrap: nowrap;
		align-items: center;
		transition: all 0.4s;

		> li {
			position: relative;
			flex: none;
			height: 32px;
			padding: 0 8px;
			margin-right: 8px;
			font-size: 16px;
			line-height: 32px;
			color: rgba(255, 255, 255, 0.75);
			background: #0057a9;

			&.active {
				color: #fff;

				&::before {
					position: absolute;
					top: 0;
					right: 0;
					left: 0;
					display: block;
					height: 2px;
					content: '';
					background: #0df;
				}
			}
		}
	}
}
</style>
