// 组件中文名唯一
export const name = '3d圆环图'
// 组件名唯一
export const type = 'o-3dpie-1'
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
		data: JSON.stringify({
			value: [
				{
					name: 'Firefox',
					y: 30.0,
				},
				{
					name: 'IE',
					y: 26.8,
				},
				{
					name: 'Chrome',
					y: 12.8,
				},
				{
					name: 'Safari',
					y: 8.5,
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 200,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '数据1',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
