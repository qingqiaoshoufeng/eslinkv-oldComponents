// 组件中文名唯一
export const name = '按钮'
// 组件名唯一
export const type = 'o-button'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'backgroundColor',
		label: '背景色',
		type: 'func-color',
	},
	{
		prop: 'color',
		label: '字体色',
		type: 'func-color',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({}),
	},
	layout: {
		// 宽高
		size: {
			width: 100,
			height: 60,
		},
	},
	// 自定义配置默认值
	config: {
		title: '按钮',
		backgroundColor: '#1c4fe8',
		color: '#fff',
	},
	widget: {
		componentVersion: version,
		name,
	},
}

export const eventTypes = [{ key: 'click', label: '点击事件' }]
