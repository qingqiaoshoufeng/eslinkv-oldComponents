// 组件中文名唯一
export const name = '切换三'
// 组件名唯一
export const type = 'b-tab-3'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
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
			width: 244,
			height: 74,
		},
	},
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}
