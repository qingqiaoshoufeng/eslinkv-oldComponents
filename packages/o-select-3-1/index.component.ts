// 组件中文名唯一
export const name = '选项卡3-1'
// 组件名唯一
export const type = 'o-select-31'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.8'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
	{
		prop: 'background',
		label: '背景颜色',
		type: 'func-input',
	},
	{
		prop: 'selectList',
		label: '下拉列表',
		type: 'func-group',
		children: [
			{
				prop: 'label',
				label: 'label',
				type: 'func-input',
			},
			{
				prop: 'value',
				label: 'value',
				type: 'func-input',
			},
		],
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		// data: JSON.stringify([
		// 	{ label: 'Tab01', value: '1' },
		// 	{ label: 'Tab02', value: '2' },
		// 	{ label: 'Tab03', value: '3' },
		// ]),
	},
	layout: {
		// 宽高
		size: {
			width: 98,
			height: 32,
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: '1',
		background: '',
		selectList: [
			{
				label: '名称1',
				value: '1',
			},
		],
	},
	widget: {
		componentVersion: version,
		name,
	},
}

export const eventTypes = [
	{ key: 'click1', label: '点击事件-tab' },
	// { key: 'click2', label: '点击事件-是否处理' },
	// { key: 'click3', label: '点击事件-切换等级' },
	// { key: 'click4', label: '点击事件-隐患详情' },
	// { key: 'click5', label: '点击事件-清空隐患列表' },
]
