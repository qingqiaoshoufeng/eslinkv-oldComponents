// 组件中文名唯一
export const name = '比率条'
// 组件名唯一
export const type = 'yq-ratio-bar'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.2'
// 自定义配置
export const customConfig = [
	{
		prop: 'marginTop',
		label: '上边距',
		type: 'func-number',
	},
	{
		prop: 'scale',
		label: '缩放',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{ label: '本年工单完成率', value: 96.345 },
			{ label: '本年工单完成率', value: 95 },
			{ label: '本年隐患整改率', value: 98 },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 423,
			height: 400,
		},
	},
	config: {
		marginTop: '16',
		scale: 1,
	},

	widget: {
		componentVersion: version,
		name,
	},
}
