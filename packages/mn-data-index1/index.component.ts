// 组件中文名唯一
export const name = '数据指标(多文本)'
// 组件名唯一
export const type = 'mn-data-index1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'title1',
		label: '标题(一行)',
		type: 'func-input',
	},
	{
		prop: 'title2',
		label: '标题(二行)',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: 4326,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 228,
			height: 66,
		},
	},
	config: {
		title1: '本月安检',
		title2: '隐患数量(个)',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
