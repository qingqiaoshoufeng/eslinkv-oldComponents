// 组件中文名唯一
export const name = '过渡组件'
// 组件名唯一
export const type = 'mn-transition'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = [
	{
		prop: 'senceId',
		label: '跳转id',
		type: 'func-input',
	},
	{
		prop: 'senceLogin',
		label: '跳转登陆场景',
		type: 'func-input',
	},
	{
		prop: 'currentSence',
		label: '当前场景',
		type: 'func-input',
	},
	{
		prop: 'url',
		label: '鉴权接口',
		type: 'func-input',
	},
	{
		prop: 'responsePath',
		label: '读取数据接口路径',
		type: 'func-input',
	},
	{
		prop: 'identity',
		label: '代理标识',
		type: 'func-input',
	},
	{
		prop: 'params',
		label: '接口参数字段列表',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: '名称',
				type: 'func-input',
			},
			{
				prop: 'value',
				label: '默认值',
				type: 'func-input',
			},
		],
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{
				label: '首页',
				id: [1],
				click: true,
			},
			{
				label: '运行',
				id: [2],
				click: true,
			},
			{
				label: '服务',
				id: [3],
				click: true,
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
	config: {
		params: [
			{
				name: 'companyId',
				value: '0049',
			},
		],
		senceId: '',
		senceLogin: '',
		currentSence: '',
		identity: 'meineng',
		url: '/meineng/isLogin',
		responsePath: 'data',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
