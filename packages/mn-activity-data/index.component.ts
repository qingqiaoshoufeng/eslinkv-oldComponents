// 组件中文名唯一
export const name = '客户动态'
// 组件名唯一
export const type = 'consumer-data'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'marginTop',
		label: '上边距',
		type: 'func-number',
	},
	{
		prop: 'textColor',
		label: '文字颜色',
		type: 'func-color',
	},
	{
		prop: 'numberColor',
		label: '数字颜色',
		type: 'func-color',
	},
	{
		prop: 'barHeight',
		label: '柱体高度',
		type: 'func-number',
	},
	{
		prop: 'numberSize',
		label: '数字大小',
		type: 'func-number',
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify([
			{
				label: '客户总数(户)',
				value: 443028,
			},
			{
				label: '本月开户(户)',
				value: 1342,
			},
			{
				label: '本月点火(户)',
				value: 734,
			},
			{
				label: '本月销户(户)',
				value: 1235,
			},
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 463,
			height: 200,
		},
		position: {
			value: 'relative',
		},
	},
	config: {
		marginTop: 8,
		textColor: '#ffffff',
		numberColor: '#00ddff',
		barHeight: 40,
		numberSize: 40,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
