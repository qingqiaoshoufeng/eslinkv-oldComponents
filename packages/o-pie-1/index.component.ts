// 组件中文名唯一
export const name = '圆环图'
// 组件名唯一
export const type = 'o-pie-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'unit',
		label: '单位',
		type: 'func-input',
	},
	{
		prop: 'title1',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'title2',
		label: '副标题',
		type: 'func-input',
	},
	{
		prop: 'startAngle',
		label: '起始角度',
		type: 'func-number',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					name: '城区1',
					value: 72,
				},
				{
					name: '城区2',
					value: 32,
				},
				{
					name: '城区3',
					value: 12,
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 450,
			height: 500,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		unit: '万m³',
		title1: '区域',
		title2: '销售气量',
		startAngle: 270,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
