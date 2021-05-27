'use strict'
exports.__esModule = true
exports.customConfig = exports.value = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '选项卡5'
// 组件名唯一
exports.type = 'o-select-5'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.1'
exports.value = {
	layout: {
		size: {
			width: 480,
			height: 32,
		},
		position: {
			value: 'relative',
		},
	},
	api: {
		data: JSON.stringify([
			{ label: 'Tab01', value: '1' },
			{ label: 'Tab02', value: '2' },
			{ label: 'Tab03', value: '3' },
			{ label: 'Tab04', value: '4' },
			{ label: 'Tab05', value: '5' },
			{ label: 'Tab06', value: '6' },
			{ label: 'Tab07', value: '7' },
		]),
	},
	config: {
		defaultValue: '1',
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
exports.customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
]
