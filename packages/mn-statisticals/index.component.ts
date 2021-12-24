// 组件中文名唯一
export const name = '美能-大字轮'
// 组件名唯一
export const type = 'mn-statistical'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
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
		desc: '供气量(m3)',
		sceneId: '',
		componentId: '',
	},
	layout: {
		size: {
			width: 700,
			height: 58,
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
]
