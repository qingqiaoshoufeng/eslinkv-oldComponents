// 组件中文名唯一
export const name = '动态展示1'
// 组件名唯一
export const type = 'mn-active-data1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'label1',
		label: '数据一',
		type: 'func-input',
	},
	{
		prop: 'label2',
		label: '数据二',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			label1: '忙碌座席',
			value1: 45,
			label2: '空闲座席',
			value2: 12,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 227,
			height: 90,
		},
	},
	config: {
		label1: '忙碌座席',
		label2: '空闲座席',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
