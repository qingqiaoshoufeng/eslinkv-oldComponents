// 组件中文名唯一
export const name = '导航栏'
// 组件名唯一
export const type = 'hz-nav'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify([
			{ key: 'nav1', label: '运行' },
			{ key: 'nav2', label: '服务' },
			{ key: 'nav3', label: '首页' },
			{ key: 'nav4', label: '工程' },
			{ key: 'nav5', label: '洞察' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 2086,
			height: 146,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: 'nav1',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
