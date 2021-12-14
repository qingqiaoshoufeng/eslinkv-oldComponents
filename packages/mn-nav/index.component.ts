// 组件中文名唯一
export const name = '美能导航'
// 组件名唯一
export const type = 'mn-nav'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-select',
		options: ['nav1', 'nav2', 'nav3', 'nav4'],
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify([
			{ key: 'nav1', label: '首页' },
			{ key: 'nav2', label: '运行' },
			{ key: 'nav3', label: '服务' },
			{ key: 'nav4', label: '工程' },
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
		defaultValue: 'nav1',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
