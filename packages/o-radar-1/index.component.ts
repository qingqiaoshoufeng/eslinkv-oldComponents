// 组件中文名唯一
export const name = '雷达图1'
// 组件名唯一
export const type = 'o-radar-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					name: '安装',
					value: 2430,
					percent: 0.67,
				},
				{
					name: '开户',
					value: 4312,
					percent: 0.55,
				},
				{
					name: '维修',
					value: 5340,
					percent: 0.67,
				},
				{
					name: '咨询',
					value: 340,
					percent: 0.3,
				},
				{
					name: '其他',
					value: 2430,
					percent: 0.56,
				},
			]
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 240,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
	},
	widget: {
		componentVersion: version,
		name,
	},
}
