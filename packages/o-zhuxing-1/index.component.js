'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '单轴图'
// 组件名唯一
exports.type = 'o-zhuxing-1'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.6'
// 自定义配置
exports.customConfig = [
	{
		prop: 'title',
		label: 'y轴单位',
		type: 'func-input',
	},
	{
		prop: 'lineColor',
		label: '折线颜色',
		type: 'func-color',
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
					name: '人口数',
				},
			],
			// 有percent字段则显示折线
			percent: {
				y: [20, 40, 50, 42, 33, 66],
				name: '占比',
			},
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
		lineColor: '#FB5325',
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
