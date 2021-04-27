'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '视频'
// 组件名唯一
exports.type = 'o-video'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.1'
// 自定义配置
exports.customConfig = [
	{
		prop: 'video',
		label: '视频',
		type: 'func-webm',
	},
	{
		prop: 'poster',
		label: '视频封面',
		type: 'func-upload',
	},
	{
		prop: 'controls',
		label: '控制条',
		type: 'func-switch',
	},
	{
		prop: 'autoplay',
		label: '自动播放',
		type: 'func-switch',
	},
	{
		prop: 'loop',
		label: '循环播放',
		type: 'func-switch',
	},
]
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: '',
	},
	layout: {
		// 宽高
		size: {
			width: 500,
			height: 350,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		video: '',
		poster: '',
		controls: true,
		autoplay: true,
		loop: false,
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
