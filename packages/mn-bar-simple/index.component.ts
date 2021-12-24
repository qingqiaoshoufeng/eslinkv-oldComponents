// 组件中文名唯一
export const name = '美能简单柱状图'
// 组件名唯一
export const type = 'mn-bar-simple'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
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
	{
		prop: 'barWidth',
		label: '柱宽',
		type: 'func-input',
	},
	{
		prop: 'showPercent',
		label: '默认展示百分比',
		type: 'func-input',
	},
	{
		prop: 'rotate',
		label: 'x标注旋转',
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
			width: 465,
			height: 255,
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
		barWidth: '6',
		showPercent: '0,75',
		rotate: '45',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
