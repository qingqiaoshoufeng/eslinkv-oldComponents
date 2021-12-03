<template lang="pug">
.list-item1(@click="getItem(data)", :style="themeStyle")
	.row1
		b-icon(
			:name="data.priority_id === '1' ? 'icon-gongdanrenwuyiwancheng' : data.priority_id === '2' ? 'icon-putonggongdanrenwu' : data.priority_id === '3' ? 'icon-jinjigongdanrenwu' : ''",
			:size="23"
		)
		.name {{ data.name }}
		.time {{ data.create_time }}
	.row2
		.address {{ data.user_address }}
		.state(:class="statusMap[data.status]") {{ data.status }}
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
	},
	data() {
		return {
			statuslist: ['已处理', '未处理'],
			statusMap: {
				已处理: 'success',
				未处理: 'error',
				// 已处理: 'success',
			},
		}
	},
}
</script>
<style lang="scss">
.list-item1 {
	padding: 29px 25px 40px 0;
	background: rgba(40, 80, 102, 0.5);
	margin-top: 22px !important;
	transition: all 1200ms;
	cursor: pointer;
	height: 160px;
	border-radius: 16px;
	&:hover {
		background: #051423;
	}
	.row1 {
		display: flex;
		align-items: center;
		.icon {
			width: 50px;
			height: 50px;
			background: #205a9e;
			margin-left: 30px;
			margin-right: 18px;
		}
		.name {
			width: 370px;
			text-align: left;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 48px;
			line-height: 50px;
			color: #feffff;
		}
		.time {
			flex: 1;
			font-size: 36px;
			line-height: 36px;
			text-align: right;
			color: #ffffff;
		}
	}
	.row2 {
		margin-top: 10px;
		display: flex;
		padding-left: 70px;
		justify-content: space-between;
		.address {
			width: 530px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			font-size: 36px;
			line-height: 36px;
			text-align: left;
			color: rgba(255, 255, 255, 0.75);
			margin-right: 28px;
		}
		.state {
			// flex: 1;
			font-size: 36px;
			line-height: 36px;
			text-align: right;
			color: #74fff2;
			position: relative;
			display: inline;
			&:before {
				content: '';
				display: inline-block;
				margin-right: 24px;
				width: 22px;
				height: 22px;
				border-radius: 50%;
				background: #74fff2;
				margin-left: -55px;
			}
			&.error {
				color: #ff3317;
				&:before {
					background: #ff3317;
				}
			}
			&.warning {
				color: rgba(255, 220, 69, 1);
				&:before {
					background: rgba(255, 220, 69, 1);
				}
			}
			&.success {
				color: rgba(116, 255, 242, 1);
				&:before {
					background: rgba(116, 255, 242, 1);
				}
			}
		}
	}
}
</style>
