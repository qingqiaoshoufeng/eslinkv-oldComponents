<template>
	<div class="widget-part pos-r" :style="styles" v-if="data">
		<div class="statistical2-box">
			<div class="left fn-flex flex-column">
				<div class="time">{{ config.config.timeDesc }}</div>
				<div class="time">
					{{ config.config.desc }}
				</div>
			</div>
			<div class="right">
				<div class="value">
					<div
						v-for="(item, index) in statisticalVal"
						:key="index"
						class="font-num"
						:class="{ item: item !== ',', comma: item === ',' }"
					>
						<!-- 滚动盒子 -->
						<div class="scroll-box" v-if="item !== ','">
							<div
								class="scroll-list"
								ref="numberItem"
								:style="{
									transform: `translate(0, -${transform[index]}%)`,
								}"
							>
								<div
									class="scroll-item"
									v-for="(child, key) in scrollList"
									:key="key"
								>
									{{ key }}
								</div>
							</div>
						</div>
						<!-- 逗号盒子 -->
						<div class="comma" v-else>{{ item }}</div>
					</div>
				</div>
			</div>
			<div class="right-more pos-r">
				<div class="right-more-total font-num">
					{{ data.todayData | toThousand }}
				</div>
				<div class="right-more-des">{{ config.config.rightDesc }}</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { widgetMixin } from '@eslinkv/vue2'
import { customConfig, value } from './index.component'

export default {
	data() {
		return {
			scrollList: new Int8Array(10),
			transform: new Int8Array(9),
		}
	},
	mixins: [widgetMixin],
	computed: {
		statisticalVal() {
			if (this.data)
				return Number(this.data.yearData).toLocaleString().split('')
			return []
		},
		timeDesc() {
			if (!this.data || !this.config.config) return '2020年度'
			return this.config.config.timeDesc.replace('xxxx', this.data.time)
		},
	},
	methods: {
		setNumberTransform() {
			if (this.data) {
				const numberArr = Number(this.data.yearData)
					.toLocaleString()
					.split('')
				this.transform = numberArr.map(item => item * 10)
			}
		},
	},
	watch: {
		data: {
			handler(val): void {
				if (val) {
					this.setNumberTransform()
				}
			},
			deep: true,
		},
	},
	created(): void {
		this.configValue = this.parseConfigValue(value, customConfig)
	},
	mounted(): void {
		setTimeout(() => {
			this.setNumberTransform()
		}, 500)
	},
}
</script>
<style lang="scss" scoped>
.statistical2-box {
	display: flex;
	width: 100%;
	height: 100%;

	.left {
		min-width: 66px;
		height: 39px;

		.time {
			width: 100%;
			height: 13px;
			margin-top: 9px;
			font-size: 13px;
			font-style: normal;
			font-weight: 600;
			line-height: 13px;
			color: #74FFF2;
			text-align: right;
			letter-spacing: 0;
		}
	}

	.right {
		margin-left: 16px;
		font-size: 29px;
		.value {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;

			.item {
				width: 38px;
				height: 54px;
				margin: 0 5px;

				.scroll-box {
					width: 38px;
					height: 54px;
					overflow: hidden;

					.scroll-list {
						display: flex;
						flex-direction: column;
						transition: transform 1s ease-in-out;

						.scroll-item {
							width: 38px;
							height: 54px;
							font-style: normal;
							font-weight: 700;
							line-height: 54px;
							color: #fff;
							text-align: center;
							background: url('./bgl.png') no-repeat;
							background-size: 100% 100%;
							border-radius: 2px;
						}
					}
				}
			}

			.comma {
				width: 7px;
				height: 33px;
				font-style: normal;
				font-weight: 700;
				line-height: 33px;
				color: #fff;
				text-align: center;
			}
		}
	}

	.right-more {
		height: 54px;
		text-align: left;
		padding: 2px 8px;
		background: url('./bg.png') no-repeat;
		background-size: 100% 100%;
		
		.right-more-des {
			min-width: 32px;
			font-weight: 600;
			font-size: 13px;
			color: #74FFF2;
			line-height: 13px;
		}

		.right-more-total {
			padding-top: 3px;
			font-size: 28px;
			color: #fff;
			line-height: 28px;
		}
	}
}
</style>
