'use strict'
exports.__esModule = true
exports.customConfig = exports.value = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '选项卡6'
// 组件名唯一
exports.type = 'o-select-6'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.2'
exports.value = {
	layout: {
		size: {
			width: 134,
			height: 32,
		},
		position: {
			value: 'relative',
		},
	},
	api: {
		data: JSON.stringify({}),
	},
	config: {
		offset: 0,
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
exports.customConfig = [
	{
		prop: 'offset',
		label: '偏移月份',
		type: 'func-number',
	},
]
