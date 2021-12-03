// 组件中文名唯一
export const name = '渐变边框'
// 组件名唯一
export const type = 'mn-box-2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
export const value = {
	config: {
		background: 'rgba(0, 0, 0, 0)',
		borderImage: 'rgba(94, 226, 253, 1)',
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
		prop: 'background',
		label: '背景色',
		type: 'func-color',
	},
	{
		prop: 'borderImage',
		label: '边框色',
		type: 'func-color',
	},
]
