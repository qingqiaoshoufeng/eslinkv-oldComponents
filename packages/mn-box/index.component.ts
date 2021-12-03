// 组件中文名唯一
export const name = '内部边框'
// 组件名唯一
export const type = 'inner-box'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
export const value = {
	config: {
		radios: true,
		borderColor: 'rgba(94, 226, 253, 1)',
	},
	layout: {
		size: {
			width: 200,
			height: 150,
		},
		position: {
			value: 'relative',
		},
	},
	widget: {
		componentVersion: version,
		name,
	},
}

export const customConfig = [
	{
		prop: 'borderColor',
		label: '边框色',
		type: 'func-color',
	},
	{
		prop: 'radios',
		label: '是否显示点',
		type: 'func-switch',
	},
]
