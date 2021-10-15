// 组件中文名唯一
export const name = 'b-地图'
// 组件名唯一
export const type = 'b-map'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.62'
export const value = {
	api: { data: {} },
	layout: {
		size: {
			width: 3840,
			height: 2160,
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
		// gaoya: true,
		// zhongya: true,
		// diya: true,
		// gasPressurePoints: true,
		// hiddenTroublePoints: true,
		// inspectionCarPoints: true,
		// inspectionPersonPoints: true,
		// companyPoints: true,
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
	// {
	// 	prop: 'gaoya',
	// 	label: '高压管网',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'zhongya',
	// 	label: '中压管网',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'diya',
	// 	label: '低压管网',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'gasPressurePoints',
	// 	label: '压力监测点',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'hiddenTroublePoints',
	// 	label: '巡检隐患点',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'inspectionCarPoints',
	// 	label: '巡检抢修车',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'inspectionPersonPoints',
	// 	label: '巡检抢修员',
	// 	type: 'func-switch',
	// },
	// {
	// 	prop: 'companyPoints',
	// 	label: '公司',
	// 	type: 'func-switch',
	// },
]
