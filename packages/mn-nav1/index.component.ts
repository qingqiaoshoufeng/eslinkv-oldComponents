// 组件中文名唯一
export const name = '美能导航1'
// 组件名唯一
export const type = 'mn-nav1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.4'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	api: {
		data: JSON.stringify([
			{ label: '首页', id: [1], key: 'nav1' },
			{ label: '运行', id: [2], key: 'nav2' },
			{ label: '服务', id: [3], key: 'nav3' },
			{ label: '工程', id: [4], key: 'nav4' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 1540,
			height: 184,
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
