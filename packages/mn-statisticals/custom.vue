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
									<div class="box">
										<div class="box_border">
											{{ key }}
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- 逗号盒子 -->
						<div class="comma" v-else>{{ item }}</div>
					</div>
				</div>
			</div>
			<div class="right-more pos-r">
				<div class="box">
					<div class="box_border">
						<div class="right-more-total font-num">
							{{ data.todayData | toThousand }}
						</div>
						<div class="right-more-des">
							{{ config.config.rightDesc }}
						</div>
					</div>
				</div>
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
			height: 14px;
			margin-top: 9px;
			font-size: 14px;
			font-style: normal;
			font-weight: 600;
			line-height: 20px;
			color: #00ddff;
			text-align: right;
			letter-spacing: 0;
		}
	}

	.right {
		margin-left: 12px;
		font-size: 36px;
		.value {
			display: flex;
			align-items: center;
			width: 100%;
			height: 100%;

			.item {
				width: 38px;
				height: 58px;
				margin: 0 6px;

				.scroll-box {
					width: 38px;
					height: 58px;
					background-color: #000d7d;
					overflow: hidden;

					.scroll-list {
						display: flex;
						flex-direction: column;
						transition: transform 1s ease-in-out;

						.scroll-item {
							width: 38px;
							height: 58px;
							font-style: normal;
							font-weight: 700;
							line-height: 58px;
							color: #fff;
							text-align: center;
							// background: url('./bgl.png') no-repeat;
							// background-size: 100% 100%;
							border-radius: 2px;
						}
					}
				}
			}

			.comma {
				width: 9px;
				height: 42px;
				font-style: normal;
				font-weight: 700;
				line-height: 42px;
				color: #fff;
				text-align: center;
			}
		}
	}

	.right-more {
		height: 58px;
		text-align: center;

		// padding: 2px 8px;
		// background: url('./bg.png') no-repeat;
		// background-size: 100% 100%;
		.box_border {
			padding-right: 24px;
		}

		.right-more-des {
			min-width: 32px;
			font-weight: 600;
			font-size: 14px;
			color: #00ddff;
			line-height: 14px;
		}

		.right-more-total {
			font-family: 'font-num';
			padding: 3px 8px;
			font-size: 24px;
			color: #fff;
			line-height: 28px;
		}
	}
}

.box {
	width: 100%;
	height: 100%;
	background: #000d7d;
	border-radius: 2px;
	overflow: hidden;
	.box_border {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		border: 1px solid #01bdeb;
		border-image: linear-gradient(
				#01bdeb,
				#0193d1,
				#043c9c,
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0),
				rgba(0, 0, 0, 0),
				#043c9c,
				#0193d1,
				#01bdeb
			)
			2;
	}
}
</style>
