// 组件中文名唯一
export const name = '数据展示二'
// 组件名唯一
export const type = 'mn-show-data2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: '标题',
		type: 'func-input',
	},
	{
		prop: 'value',
		label: '数值',
		type: 'func-input',
	},
	{
		prop: 'bgStartColor',
		label: '背景渐变(起始)',
		type: 'func-color',
	},
	{
		prop: 'bgEndColor',
		label: '背景渐变(结束)',
		type: 'func-color',
	},
	{
		prop: 'numberColor',
		label: '数字颜色',
		type: 'func-color',
	},
	{
		prop: 'show',
		label: '组件是否展示',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		data: JSON.stringify({ title: '本月缴费笔数(笔）', value: 100 }),
	},
	layout: {
		// 宽高
		size: {
			width: 228,
			height: 89,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '',
		value: 100,
		bgStartColor: 'rgba(0, 87, 169, 0.4)',
		bgEndColor: 'rgba(0, 87, 169, 0)',
		numberColor: '#00DDFF',
		show: 1,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
