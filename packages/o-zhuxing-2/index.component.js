'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '多轴图'
// 组件名唯一
exports.type = 'o-zhuxing-2'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.3'
// 自定义配置
exports.customConfig = [
	{
		prop: 'title',
		label: 'y轴单位',
		type: 'func-input',
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
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
