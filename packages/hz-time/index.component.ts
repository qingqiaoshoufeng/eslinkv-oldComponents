// 组件中文名唯一
export const name = '杭展-时间'
// 组件名唯一
export const type = 'hz-time'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	layout: {
		// 宽高
		size: {
			width: 305,
			height: 64,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}
