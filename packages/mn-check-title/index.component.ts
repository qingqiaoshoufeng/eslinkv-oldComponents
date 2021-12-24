// 组件中文名唯一
export const name = '头部切换一'
// 组件名唯一
export const type = 'mn-check-title'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
	{
		prop: 'bdStartColor',
		label: '边框渐变(起始)',
		type: 'func-color',
	},
	{
		prop: 'bdEndColor',
		label: '边框渐变(结束)',
		type: 'func-color',
	},
	{
		prop: 'bgStartColor',
		label: '背景渐变(起始)',
		type: 'func-color',
	},
	{
		prop: 'bgEndColor',
		label: '背景渐变(起始)',
		type: 'func-color',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{
				label: '客服',
				id: [1],
				key: 'nav1',
			},
			{
				label: '安检',
				id: [2],
				key: 'nav2',
			},
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 446,
			height: 30,
		},
	},
	config: {
		defaultValue: 'nav1',
		bdStartColor: '#00ddff',
		bdEndColor: 'rgba(0, 87, 169, 0)',
		bgStartColor: 'rgba(0, 87, 169, 0.7)',
		bgEndColor: 'rgba(0, 87, 169, 0)',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
