// 组件中文名唯一
export const name = '切换'
// 组件名唯一
export const type = 'tab'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
// 自定义配置
export const customConfig = [
	{
		prop: 'activeBgColor',
		label: '选中背景颜色',
		type: 'func-color',
	},
	{
		prop: 'activeBdColor',
		label: '选中边框颜色',
		type: 'func-color',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{
				label: '客户',
				id: [1],
			},
			{
				label: '服务',
				id: [2],
			},
			{
				label: '营收',
				id: [3],
			},
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 216,
			height: 36,
		},
	},
	config: {
		activeBgColor: '#0057A9',
		activeBdColor: '#00DDFF',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
