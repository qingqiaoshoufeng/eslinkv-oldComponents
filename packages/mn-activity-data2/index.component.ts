// 组件中文名唯一
export const name = '动态展示2'
// 组件名唯一
export const type = 'mn-activity-data2'
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
			value: 0.5,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 227,
			height: 40,
		},
	},
	config: {
		unit: '',
		title: '平均座席空闲时间',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
