// 组件中文名唯一
export const name = 'line'
// 组件名唯一
export const type = 'mn-line'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'color',
		label: '颜色',
		type: 'func-color',
	},
	{
		prop: 'border',
		label: '粗细',
		type: 'func-number',
	},
]
// 配置
export const value = {
	api: {},
	layout: {
		// 宽高
		size: {
			width: 475,
			height: 1,
		},
	},
	config: {
		color: '#00DDFF',
		border: 1,
	},

	widget: {
		componentVersion: version,
		name,
	},
}
