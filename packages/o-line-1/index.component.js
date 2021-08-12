'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '面积图'
// 组件名唯一
exports.type = 'o-line-1'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.3'
// 自定义配置
exports.customConfig = [
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
		prop: 'smooth',
		label: '平滑曲线',
		type: 'func-switch',
	},
	{
		prop: 'area',
		label: '面积图',
		type: 'func-switch',
	},
	{
		prop: 'datazoom',
		label: '区域缩放',
		type: 'func-switch',
	},
	{
		prop: 'scale',
		label: 'y轴是否从0开始',
		type: 'func-switch',
	},
]
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [250, 350, 120, 290, 240, 250],
					name: '数据1',
				},
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [150, 250, 420, 390, 140, 350],
					name: '数据2',
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
		smooth: true,
		area: true,
		datazoom: false,
		left: 0,
		scale: false,
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}