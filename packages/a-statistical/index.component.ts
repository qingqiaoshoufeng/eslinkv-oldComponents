// 组件中文名唯一
export const name = 'statistical'
// 组件名唯一
export const type = 'a-statistical'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.5'
export const value = {
	api: {
		data: JSON.stringify({
			todayData: 964383,
			yearData: 375321809,
		}),
	},
	config: {
		timeDesc: '本年累计',
		rightDesc: '今日供气量(m³)',
		desc: '供气量(m³)',
		sceneId: '',
		componentId: '',
		scale: 1,
		color: 'rgba(94, 226, 253, 1)',
		background: 'rgba(0, 0, 0, 0)',
		borderImage: 'rgba(94, 226, 253, 1)',
	},
	layout: {
		size: {
			width: 700,
			height: 54,
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
		prop: 'desc',
		label: '描述',
		type: 'func-input',
	},
	{
		prop: 'timeDesc',
		label: '时间',
		type: 'func-input',
	},
	{
		prop: 'rightDesc',
		label: '今日描述',
		type: 'func-input',
	},
	{
		prop: 'sceneId',
		label: '场景id',
		type: 'func-input',
	},
	{
		prop: 'componentId',
		label: '组件id',
		type: 'func-input',
	},
	{
		prop: 'scale',
		label: '缩放大小',
		type: 'func-input',
	},
	{
		prop: 'color',
		label: '字体颜色',
		type: 'func-color',
	},
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
