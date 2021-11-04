// 组件中文名唯一
export const name = '文本'
// 组件名唯一
export const type = 'o-text'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'txt',
		label: '文本',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify({
			value: '默认文本'
		})
	},
	layout: {
		// 宽高
		size: {
			width: 200,
			height: 20,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		color: '#fff',
		fontSize: 14,
		fontWeight: 'normal',
		fontStyle: 'normal',
		fontFamily: 'PingFang SC',
		lineHeight: 1
	},
	widget: {
		componentVersion: version,
		name,
	},
}
