// 组件中文名唯一
export const name = 'list框'
// 组件名唯一
export const type = 'mn-list'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'marginTop',
		label: '上边距',
		type: 'func-number',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{ label: '门站', value: 1, unit: '座' },
			{ label: '应急站', value: 2, unit: '座' },
			{ label: '加气站', value: 3333333333, unit: '个' },
			{ label: '高压管网', value: 1, unit: 'km' },
			{ label: '中压管网', value: 2, unit: 'km' },
			{ label: '低压管网', value: 3, unit: 'km' },
			{ label: '高中压调压站', value: 1, unit: '个' },
			{ label: '中低压调压站', value: 2, unit: '个' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 425,
			height: 360,
		},
	},
	config: {
		marginTop: '0',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
