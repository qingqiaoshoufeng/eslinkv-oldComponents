'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '雷达图'
// 组件名唯一
exports.type = 'o-radar-1'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.2'
// 自定义配置
exports.customConfig = []
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					name: '分类一',
					value: 2430,
					percent: 0.67,
				},
				{
					name: '分类二',
					value: 4312,
					percent: 0.55,
				},
				{
					name: '分类三',
					value: 5340,
					percent: 0.67,
				},
				{
					name: '分类四',
					value: 340,
					percent: 0.3,
				},
				{
					name: '分类五',
					value: 2430,
					percent: 0.56,
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 240,
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
