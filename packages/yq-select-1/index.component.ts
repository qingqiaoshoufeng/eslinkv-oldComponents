// 组件中文名唯一
export const name = '选项卡'
// 组件名唯一
export const type = 'yq-select-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
	{
		prop: 'tablist',
		label: 'tab列表',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: 'name',
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
		data: JSON.stringify([
			{ label: 'Tab01', value: '1' },
			{ label: 'Tab02', value: '2' },
			{ label: 'Tab03', value: '3' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 250,
			height: 32,
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: '1',
		tablist: [
			{
				name: 'tab1',
				value: 1,
			},
			{
				name: 'tab2',
				value: 2,
			},
		],
	},
	widget: {
		componentVersion: version,
		name,
	},
}
