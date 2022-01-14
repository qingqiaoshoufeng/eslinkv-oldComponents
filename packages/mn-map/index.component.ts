// 组件中文名唯一
export const name = 'mn-地图'
// 组件名唯一
export const type = 'mn-map'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
export const value = {
	api: { data: {} },
	layout: {
		size: {
			width: 1920,
			height: 1080,
		},
		position: {
			value: 'relative',
		},
	},
	widget: {
		componentVersion: version,
		name,
	},
	config: {
		size: 20,
		selectedSize: 28,
		borderWidth: 6,
		stepSpace: 50,
	},
}
// 自定义配置
export const customConfig = [
	{
		prop: 'size',
		label: '图标大小',
		type: 'func-input',
	},
	{
		prop: 'selectedSize',
		label: '图标选中大小',
		type: 'func-input',
	},
	{
		prop: 'borderWidth',
		label: '管线宽度',
		type: 'func-input',
	},
	{
		prop: 'stepSpace',
		label: '管线箭头',
		type: 'func-input',
	},
]
