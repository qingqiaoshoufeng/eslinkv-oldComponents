// 组件中文名唯一
export const name = 'b-列表'
// 组件名唯一
export const type = 'b-widget-3'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
// 自定义配置
export const customConfig = [
	{
		prop: 'tabDefaultValue',
		label: 'tab默认选项',
		type: 'func-input',
	},
	{
		prop: 'title1',
		label: '标题1',
		type: 'func-input',
	},
	{
		prop: 'title2',
		label: '标题2',
		type: 'func-input',
	},
	{
		prop: 'text3',
		label: '标题3',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			handledNumber: 0,
			unhandledNumber: 0,
			list: [
				{
					hiddenName: '巡检隐患',
					hiddenTime: '11-03 08:23:27',
					address: '宁围镇镇宁路1400号',
					hiddenStatus: '未处理',
				},
				{
					hiddenName: '工地看护',
					hiddenTime: '11-03 08:23:27',
					address: '宁围镇镇宁路1400号',
					hiddenStatus: '已处理',
				},
				{
					hiddenName: '巡检隐患',
					hiddenTime: '11-03 08:23:27',
					address: '宁围镇镇宁路1400号',
					hiddenStatus: '未处理',
				},
				{
					hiddenName: '第三方破坏',
					hiddenTime: '11-03 08:23:27',
					address: '宁围镇镇宁路1400号',
					hiddenStatus: '已处理',
				},
				{
					hiddenName: '工地看护',
					hiddenTime: '11-03 08:23:27',
					address: '宁围镇镇宁路1400号',
					hiddenStatus: '未处理',
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 881,
			height: 480,
		},
	},
	config: {
		title1: '工艺报警',
		title2: '抢维事件',
		title3: '巡检隐患',
		tabDefaultValue: 0,
	},
	widget: {
		componentVersion: version,
		name,
	},
}

export const eventTypes = [
	{ key: 'click1', label: '点击事件-tab' },
	{ key: 'click2', label: '点击事件-是否处理' },
	{ key: 'click3', label: '点击事件-切换等级' },
]
