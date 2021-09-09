// 组件中文名唯一
export const name = 'b-地图'
// 组件名唯一
export const type = 'b-map'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
export const value = {
	layout: {
		size: {
			width: 3500,
			height: 1050,
		},
		position: {
			value: 'relative',
		},
	},
	widget: {
		componentVersion: version,
		name,
	},
}
