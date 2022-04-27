// 组件中文名唯一
export const name = '数据展示'
// 组件名唯一
export const type = 'yq-title-2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.2'
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
	{
		prop: 'show',
		label: '是否展示',
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
			width: 801,
			height: 97,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '',
		value: 100,
		show: 1,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
