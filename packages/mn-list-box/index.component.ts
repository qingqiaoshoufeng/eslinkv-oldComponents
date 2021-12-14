// 组件中文名唯一
export const name = 'list框'
// 组件名唯一
export const type = 'mn-list-box'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
]
// 配置
export const value = {
	layout: {
		// 宽高
		size: {
			width: 475,
			height: 905,
		},
	},
	config: {
		title: '管网运行',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
