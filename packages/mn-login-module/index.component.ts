// 组件中文名唯一
export const name = '通用登录模块'
// 组件名唯一
export const type = 'mn-login-module'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'username',
		label: '用户名',
		type: 'func-input',
	},
	{
		prop: 'password',
		label: '密码',
		type: 'func-input',
	},
	{
		prop: 'url',
		label: '接口请求地址',
		type: 'func-input',
	},
	{
		prop: 'scenceId',
		label: '登录成功后跳转到的场景Id',
		type: 'func-input',
	},
	{
		prop: 'jumpUrl',
		label: '登录成功后跳转到的新页面url',
		type: 'func-input',
	},
	// {
	// 	prop: 'backgroundColor',
	// 	label: '输入框背景色',
	// 	type: 'func-color',
	// },
	// {
	// 	prop: 'borderColor',
	// 	label: '输入框边框色',
	// 	type: 'func-color',
	// },
	// {
	// 	prop: 'borderWidth',
	// 	label: '输入框边框宽度',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'padding',
	// 	label: '输入框padding',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'borderRadius',
	// 	label: '输入框圆角',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'placeholder',
	// 	label: '输入框placeholder',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'placeholderFontSize',
	// 	label: 'placeholder字体大小',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'placeholderFontColor',
	// 	label: 'placeholder字体颜色',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'fontSize',
	// 	label: '输入框字体大小',
	// 	type: 'func-input',
	// },
	// {
	// 	prop: 'fontColor',
	// 	label: '输入框字体颜色',
	// 	type: 'func-input',
	// },
]
// 配置
export const value = {
	layout: {
		// 宽高-默认值需要可修改
		size: {
			width: 220,
			height: 36,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		username: '',
		password: '',
		url: '',
		scenceId: '',
		jumpUrl: '',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
