'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '条形占比图'
// 组件名唯一
exports.type = 'o-bar-1'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.3'
// 自定义配置
exports.customConfig = [
	{
		prop: 'unit',
		label: '单位',
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
					value: 1233556,
					percent: 60,
					name: '分类一',
					img: 'https://via.placeholder.com/150',
				},
				{
					value: 69999,
					percent: 30,
					name: '分类二',
					img: 'https://via.placeholder.com/150',
				},
				{
					value: 45332,
					percent: 20,
					name: '分类三',
					img: 'https://via.placeholder.com/150',
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 184,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		unit: '人',
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
