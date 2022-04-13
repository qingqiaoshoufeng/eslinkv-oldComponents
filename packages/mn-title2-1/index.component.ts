// 组件中文名唯一
export const name = '控制隐藏标题'
// 组件名唯一
export const type = 'mn-title-2-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{
				label: '标题一',
				id: 1,
				key: 'nav1',
			},
			{
				label: '标题二',
				id: 2,
				key: 'nav2',
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
		defaultValue: 'nav1',
		title: '标题',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
