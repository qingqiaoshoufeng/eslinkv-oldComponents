// 组件中文名唯一
export const name = 'b-地图'
// 组件名唯一
export const type = 'b-map'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
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
		gaoya: true,
		cigaoya: true,
		zhongya: true,
		companyPoints: true,
		gatePoints: true,
		doorStationPoints: true,
		lngPoints: true,
		pressurePoints: true,
		pressureCabinetPoints: true,
		valvePoints: true,
		businessUserPoints: true,
		lngUserPoints: true,
		inspectionPersonPoints: true,
		inspectionCarPoints: true,
		nationalLinePoints: true,
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
	{
		prop: 'gaoya',
		label: '高压',
		type: 'func-switch',
	},
	{
		prop: 'cigaoya',
		label: '次高压',
		type: 'func-switch',
	},
	{
		prop: 'zhongya',
		label: '中压',
		type: 'func-switch',
	},
	{
		prop: 'companyPoints',
		label: '公司',
		type: 'func-switch',
	},
	{
		prop: 'gatePoints',
		label: '母站',
		type: 'func-switch',
	},
	{
		prop: 'doorStationPoints',
		label: '门站',
		type: 'func-switch',
	},
	{
		prop: 'lngPoints',
		label: '加气站',
		type: 'func-switch',
	},
	{
		prop: 'pressurePoints',
		label: '调压站',
		type: 'func-switch',
	},
	{
		prop: 'pressureCabinetPoints',
		label: '调压器',
		type: 'func-switch',
	},
	{
		prop: 'valvePoints',
		label: '阀门',
		type: 'func-switch',
	},
	{
		prop: 'businessUserPoints',
		label: '管道气用户',
		type: 'func-switch',
	},
	{
		prop: 'lngUserPoints',
		label: 'LNG用户',
		type: 'func-switch',
	},
	{
		prop: 'inspectionPersonPoints',
		label: '巡检人员',
		type: 'func-switch',
	},
	{
		prop: 'inspectionCarPoints',
		label: '巡检车辆',
		type: 'func-switch',
	},
	{
		prop: 'nationalLinePoints',
		label: '国家管网',
		type: 'func-switch',
	},
]
