// 组件中文名唯一
export const name = '展开按钮'
// 组件名唯一
export const type = 'btn'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'color',
		label: '颜色',
		type: 'func-color',
	},
	{
		prop: 'fontSize',
		label: '字体大小',
		type: 'func-number',
	},
]
// 配置
export const value = {
	layout: {
		// 宽高
		size: {
			width: 24,
			height: 24,
		},
	},
	config: {
		color: '#00DDFF',
		fontSize: 24,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
