// 组件中文名唯一
export const name = '切换四'
// 组件名唯一
export const type = 'yq-check-title'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{
				label: '场站',
				id: [1],
			},
			{
				label: '管网',
				id: [2],
			},
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 876,
			height: 75,
		},
	},
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}
