'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '轮播饼图'
// 组件名唯一
exports.type = 'o-pie-7'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.1'
// 自定义配置
exports.customConfig = [
	{
		prop: 'suffix',
		label: '后缀',
		type: 'func-input',
	},
	{
		prop: 'background',
		label: '背景图片',
		type: 'func-background',
	},
]
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{ value: 12.5, des: '111', title: '分类一' },
				{ value: 12.5, des: '', title: '分类二' },
				{ value: 12.5, des: '', title: '分类三' },
				{ value: 12.5, des: '', title: '分类四' },
				{ value: 12.5, des: '', title: '分类五' },
				{ value: 12.5, des: '', title: '分类六' },
				{ value: 12.5, des: '', title: '分类七' },
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 276,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		background: 'https://placeholder.idcd.com/?w=300&h=300&text=300x300',
		suffix: '%',
	},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}