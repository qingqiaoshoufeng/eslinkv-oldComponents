// 组件中文名唯一
export const name = '选项卡2'
// 组件名唯一
export const type = 'o-select-2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.7'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
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
			width: 250,
			height: 32,
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: 'month',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
