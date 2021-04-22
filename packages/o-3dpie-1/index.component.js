'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '3d圆环图'
// 组件名唯一
exports.type = 'o-3dpie-1'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.1'
// 自定义配置
exports.customConfig = []
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					name: 'Firefox',
					y: 30.0,
				},
				{
					name: 'IhhhE',
					y: 26.8,
				},
				{
					name: 'Chrome',
					y: 12.8,
				},
				{
					name: 'Safari',
					y: 8.5,
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 200,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
