// 组件中文名唯一
export const name = '选项卡'
// 组件名唯一
export const type = 'mn-select'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.7'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
	{
		prop: 'padding',
		label: 'padding值(上下)',
		type: 'func-number',
	},
	{
		prop: 'fontSize',
		label: '字体',
		type: 'func-number',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{ label: '年', value: 'year' },
			{ label: '月', value: 'month' },
			{ label: '日', value: 'day' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 82,
			height: 50,
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: 'month',
		padding: 8,
		margin: 17,
		fontSize: 16,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
