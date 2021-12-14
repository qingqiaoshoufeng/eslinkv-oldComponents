// 组件中文名唯一
export const name = '数据指标'
// 组件名唯一
export const type = 'mn-data-index'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
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
		// 接口请求数据默认值
		data: JSON.stringify({
			value: 4326,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 246,
			height: 53,
		},
	},
	config: {
		title: '居民户数量(户)',
		unit: '',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
