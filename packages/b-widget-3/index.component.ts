// 组件中文名唯一
export const name = 'b-列表'
// 组件名唯一
export const type = 'b-widget-3'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'text1',
		label: '文字1',
		type: 'func-input',
	},
	{
		prop: 'text2',
		label: '文字2',
		type: 'func-input',
	},
	{
		prop: 'text3',
		label: '文字3',
		type: 'func-input',
	},
	{
		prop: 'text4',
		label: '文字4',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			num1: 80,
			num2: 56,
			num3: 64,
			num4: 16,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 881,
			height: 480,
		},
	},
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}
