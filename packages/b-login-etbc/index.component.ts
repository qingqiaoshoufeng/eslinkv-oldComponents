// 组件中文名唯一
export const name = 'etbc-登录'
// 组件名唯一
export const type = 'b-login-etbc'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.10'

export const value = {
	layout: {
		size: {
			width: 10,
			height: 10,
		},
		position: {
			value: 'relative',
		},
	},
	config: {
		location: '',
	},
	widget: {
		componentVersion: version,
		name,
	},
}

// 自定义配置
export const customConfig = [
	{
		prop: 'location',
		label: '登录跳转地址',
		type: 'func-input',
	},
]
