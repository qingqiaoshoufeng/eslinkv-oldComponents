// 组件中文名唯一
export const name = 'b-选项卡1'
// 组件名唯一
export const type = 'b-select-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.4'
// 自定义配置
export const customConfig = [
	{
		prop: 'defaultValue',
		label: '默认选项',
		type: 'func-input',
	},
	{
		prop: 'show',
		label: '是否展示',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify([
			{ label: 'Tab01', value: '1' },
			{ label: 'Tab02', value: '2' },
			{ label: 'Tab03', value: '3' },
		]),
	},
	layout: {
		// 宽高
		size: {
			width: 250,
			height: 32,
		},
	},
	// 自定义配置默认值
	config: {
		defaultValue: '1',
		show: 1,
	},
	widget: {
		componentVersion: version,
		name,
	},
}
