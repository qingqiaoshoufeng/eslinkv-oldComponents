// 组件中文名唯一
export const name = '视频'
// 组件名唯一
export const type = 'video'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.6'
// 自定义配置
export const customConfig = [
	{
		prop: 'video',
		label: '视频',
		type: 'func-video',
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
		video: '',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
