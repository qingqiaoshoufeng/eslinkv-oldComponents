// 组件中文名唯一
export const name = '切换一'
// 组件名唯一
export const type = 'b-tab-1'
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
				label: '首页',
				id: [1],
			},
			{
				label: '运行',
				id: [2],
			},
			{
				label: '服务',
				id: [3],
			},
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 708,
			height: 48,
		},
	},
	config: {},
	widget: {
		componentVersion: version,
		name,
	},
}
