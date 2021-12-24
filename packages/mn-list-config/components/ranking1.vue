<template lang="pug">
.list-item3(@click="getItem(data)", :style="themeStyle")
	.left
		.ranking(:class="{ top3: index < 3 }") {{ index + 1 }}
		.info
			.name {{ data[dicMap.name] }}
			.address {{ data[dicMap.desc] }}
	.right
		.top
			.value {{ data[dicMap.amount] }}
			.unit {{ '元/' }}
			.value {{ data[dicMap.count] }}
			.unit {{ '比' }}
			//- .trend
			//- 	b-icon(
			//- 		:name="data.priority_id === '1' ? 'icon-gongdanrenwuyiwancheng' : data.priority_id === '2' ? 'icon-putonggongdanrenwu' : data.priority_id === '3' ? 'icon-jinjigongdanrenwu' : ''",
			//- 		:size="23"
			//- 	)
		.bottom
			.label {{ '最早欠费：' }}
			.value {{ data[dicMap.time] }}
</template>

<script>
import bIcon from '../components/b-icon.vue'
export default {
	name: 'listItemWorkeffortTast', // 适用于任务工单、
	components: {
		bIcon,
	},
	props: {
		data: {
			type: Object,
			required: true,
		},
		getItem: {
			type: Function,
		},
		themeStyle: {
			type: Object,
			required: true,
		},
		index: {
			type: Number,
			required: true,
		},
		dicMap: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			statuslist: ['已处理', '未处理'],
			statusMap: {
				已处理: 'success',
				处理中: 'error',
			},
			keysMap: ['icon-keep', 'icon-up', 'icon-down'],
		}
	},
}
</script>
<style lang="scss" scoped>
.list-item3 {
	padding: 28px 20px 28px 32px;
	background: rgba(0, 31, 109, 0.5) !important;
	margin-top: 22px !important;
	transition: all 1200ms;
	cursor: pointer;
	height: 160px;
	border-radius: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background: rgba(15, 55, 154, 0.5) !important;
	}
	.left {
		flex: 6;
		height: 100%;
		display: flex;
		align-items: center;
		overflow: hidden;
		.ranking {
			width: 93px;
			height: 93px;

			font-family: PingFang SC;
			font-style: normal;
			font-weight: 600;
			font-size: 64px;
			line-height: 90px;
			/* identical to box height */

			text-align: center;

			color: #ffffff;
			background: linear-gradient(
				180deg,
				rgba(116, 171, 255, 0) 0%,
				rgba(116, 171, 255, 0.25) 100%
			);
			&.top3 {
				box-sizing: border-box;
				border-bottom: 4px solid rgba(255, 177, 85, 1);
				background: linear-gradient(
					180deg,
					rgba(116, 171, 255, 0) 0%,
					rgba(116, 171, 255, 0.5) 100%
				);
			}
		}
		.info {
			height: 100%;
			flex: 1;
			flex-direction: column;
			align-items: flex-start;
			justify-content: space-between;
			justify-content: space-between;
			display: flex;
			padding-left: 24px;
			.name {
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 40px;
				line-height: 56px;
				/* identical to box height */

				color: #feffff;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				max-width: 350px;
			}
			.address {
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 24px;
				line-height: 34px;
				/* identical to box height */
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: rgba(255, 255, 255, 0.75);
				max-width: 350px;
			}
		}
	}
	.right {
		overflow: hidden;
		flex: 4;
		height: 100%;
		/* height: 100%; */
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		.top {
			// flex: 1;
			// height: 100%;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.value {
				font-family: DIN;
				font-style: normal;
				font-weight: 500;
				font-size: 40px;
				line-height: 58px;
				text-align: right;
				color: #feffff;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.unit {
				font-family: DIN;
				font-style: normal;
				font-weight: 500;
				font-size: 40px;
				line-height: 58px;
				text-align: right;
				color: #feffff;
			}
		}
		.bottom {
			display: flex;
			justify-content: flex-end;
			max-width: 350px;
			.label {
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 28px;
				line-height: 35px;
				text-align: right;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				width: 140px;
				/* style1/0.75白 */

				color: rgba(255, 255, 255, 0.75);
			}
			.value {
				font-family: PingFang SC;
				font-style: normal;
				font-weight: normal;
				font-size: 28px;
				line-height: 35px;
				text-align: right;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				max-width: 200px;
				/* style1/0.75白 */

				color: rgba(255, 255, 255, 0.75);
			}
		}
	}
}
</style>
