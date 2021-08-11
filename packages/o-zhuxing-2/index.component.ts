// 组件中文名唯一
export const name = '多轴图'
// 组件名唯一
export const type = 'o-zhuxing-2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.6'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: 'y轴单位',
		type: 'func-input',
	},
	{
		prop: 'left',
		label: '缩进',
		type: 'func-number',
	},
	{
		prop: 'isLinearGradient',
		label: '是否渐变',
		type: 'func-switch',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [250, 120, 140, 270, 180, 130],
					name: '居民数',
				},
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [280, 170, 80, 200, 190, 90],
					name: '非居民数',
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 497,
			height: 200,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '数量',
		left: 0,
		isLinearGradient: false,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
