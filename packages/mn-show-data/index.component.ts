// 组件中文名唯一
export const name = '数字展示'
// 组件名唯一
export const type = 'show-data'
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
			value: 1671,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 196,
			height: 96,
		},
		position: {
			value: 'relative',
		},
	},
	config: {
		unit: '万m³',
		title: '本月累计销气量',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
