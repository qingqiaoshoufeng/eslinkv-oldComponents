// 组件中文名唯一
export const name = '选项卡6'
// 组件名唯一
export const type = 'o-select-6'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
export const value = {
	layout: {
		size: {
			width: 134,
			height: 32,
		},
		position: {
			value: 'relative',
		},
	},
	api: {
		data: JSON.stringify({})
	},
	config: {
		offset: 0
	},
	widget: {
		componentVersion: version,
		name,
	},
}

export const customConfig = [
	{
		prop: 'offset',
		label: '偏移月份',
		type: 'func-number',
	},
]
