// 组件中文名唯一
export const name = '标题五'
// 组件名唯一
export const type = 'b-title-5'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([]),
	},
	layout: {
		// 宽高
		size: {
			width: 1266,
			height: 141,
		},
	},
	config: {
		title: '标题',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
