'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '圆环进度图'
// 组件名唯一
exports.type = 'o-pie-3'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.1'
// 自定义配置
exports.customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
]
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			percent: 56,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 160,
			height: 160,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '完成率',
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
