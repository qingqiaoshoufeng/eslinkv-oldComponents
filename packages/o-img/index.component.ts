// 组件中文名唯一
export const name = '图片'
// 组件名唯一
export const type = 'o-img'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.1.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'img',
		label: '图片',
		type: 'func-image',
	},
	{
		prop: 'isPointer',
		label: '超链接手势',
		type: 'func-switch',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: '',
	},
	layout: {
		// 宽高
		size: {
			width: 200,
			height: 120,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		isPointer: false,
		img: 'data:image/png;base64,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',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
