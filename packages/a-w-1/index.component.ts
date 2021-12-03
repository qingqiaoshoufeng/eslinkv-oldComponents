// 组件中文名唯一
export const name = 'a-组件1'
// 组件名唯一
export const type = 'a-w-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'unit',
		label: '单位',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify({
			value: 38528,
		})
	},
	layout: {
		// 宽高
		size: {
			width: 714,
			height: 344,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '今日接纳量',
		unit: '万m³'
	},
	widget: {
		componentVersion: version,
		name,
	},
}
