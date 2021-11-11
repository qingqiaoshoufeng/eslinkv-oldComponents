// 组件中文名唯一
export const name = 'yq-title-1'
// 组件名唯一
export const type = 'yq-title-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'value',
		label: '数值',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify({ title: '标题文本', value: 100 }),
	},
	layout: {
		// 宽高
		size: {
			width: 625,
			height: 152,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '',
		value: 100,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
