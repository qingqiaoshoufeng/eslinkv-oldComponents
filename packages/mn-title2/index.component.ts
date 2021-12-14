// 组件中文名唯一
export const name = '标题二'
// 组件名唯一
export const type = 'mn-title-2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = []
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{
				label: '标题一',
				id: 1,
			},
			{
				label: '标题二',
				id: 2,
			},
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 463,
			height: 43,
		},
	},
	config: {
		title: '标题',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
