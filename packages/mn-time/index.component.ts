// 组件中文名唯一
export const name = '时间'
// 组件名唯一
export const type = 'time'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'timeFontSize',
		label: '时间字号',
		type: 'func-number',
	},
	{
		prop: 'dateFontSize',
		label: '日期字号',
		type: 'func-number',
	},
	{
		prop: 'timeColor',
		label: '时间颜色',
		type: 'func-color',
	},
]
// 配置
export const value = {
	layout: {
		// 宽高
		size: {
			width: 230,
			height: 46,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		timeFontSize: 40,
		dateFontSize: 18,
		timeColor: '#FFFFFF',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
