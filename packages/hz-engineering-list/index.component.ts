// 组件中文名唯一
export const name = 'hz-工程-列表'
// 组件名唯一
export const type = 'hz-engineering-list'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.22'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			processed: 0,
			unProcessed: 0,
			realTimeList: [
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
				{
					content: '八方杰座大厦',
					address: '七堡大王庙路6号',
					id: 1,
					status: 1,
					time: '剩余67天',
					statusText: '80%',
				},
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
				{
					content: '大农港路管网工程',
					address: '丁桥大农港路',
					id: 1,
					status: 0,
					time: '延期3天',
					statusText: '75%',
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 1136,
		},
		position: {
			value: 'relative',
		},
	},
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}

export const eventTypes = [
	{ key: 'click1', label: '点击事件-tab' },
	{ key: 'click2', label: '点击事件-是否处理' },
	{ key: 'click3', label: '点击事件-切换等级' },
	{ key: 'click4', label: '点击事件-隐患详情' },
	{ key: 'click5', label: '点击事件-清空隐患列表' },
]
