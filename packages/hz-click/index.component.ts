// 组件中文名唯一
export const name = 'hz-点击'
// 组件名唯一
export const type = 'hz-click'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.22'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	layout: {
		// 宽高
		size: {
			width: 32,
			height: 32,
		},
		position: {
			value: 'relative',
		},
	},
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}

export const eventTypes = [{ key: 'click', label: '点击事件' }]
