// 组件中文名唯一
export const name = 'card列表'
// 组件名唯一
export const type = 'hz-card-list'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	// api: {
	// 	data: JSON.stringify(),
	// },
	layout: {
		// 宽高
		size: {
			width: 340,
			height: 654,
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
