'use strict'
exports.__esModule = true
exports.value =
	exports.customConfig =
	exports.version =
	exports.type =
	exports.name =
		void 0
// 组件中文名唯一
exports.name = '选项卡1'
// 组件名唯一
exports.type = 'o-select-1'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.5'
// 自定义配置
exports.customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
	{
		prop: 'backgroundColor',
		label: '背景色',
		type: 'func-color',
	},
	{
		prop: 'borderColor',
		label: '边框色',
		type: 'func-color',
	},
	{
		prop: 'fontSize',
		label: '字体大小',
		type: 'func-number',
	},
]
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{ label: 'Tab01', value: '1' },
			{ label: 'Tab02', value: '2' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 112,
			height: 30,
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: '1',
		backgroundColor: '#0057A9',
		borderColor: '#00DDFF',
		fontSize: 16,
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
