// 组件中文名唯一
export const name = '美能标题图片'
// 组件名唯一
export const type = 'mn-title-pic'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	api: {},
	layout: {
		// 宽高
		size: {
			width: 612,
			height: 38,
		},
	},
	config: {
		defaultValue: 'home-page',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
