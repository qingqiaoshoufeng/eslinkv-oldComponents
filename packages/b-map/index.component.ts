// 组件中文名唯一
export const name = 'b-地图'
// 组件名唯一
export const type = 'b-map'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.3'
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
		zhongya: true,
		diya: true,
		doorStationPoints: true,
		emergencyStationPoints: true,
		gasFillPoints: true,
		highPressureAdjustPoints: true,
		middlePressureAdjustPoints: true,
		monitorPoints: true,
		leakAlarmPoints: true,
		hiddenTroublePoints: true,
		destructionPoints: true,
		lookAfterPoints: true,
		ScramblePoints: true,
		technologyAlarmPoints: true,
		repairCarPoints: true,
		repairPeoplePoints: true,
		videoMonitorPoints: true,
		managePoints: true,
		hiddenTroubleHeatPoints: true,
		repairHeatPoints: true,
		companyPoints: true,
		serviceNetworkPoints: true,
		workOrderTaskPoints: true,
		iotAlarmPoints: true,
		householdPoints: true,
		businessPoints: true,
		customerHeatPoints: true,
		gasHeatPoints: true,
		billHeatPoints: true,
		workOrderHeatPoints: true,
		checkHeatPoints: true,
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
		label: '高压管网',
		type: 'func-switch',
	},
	{
		prop: 'zhongya',
		label: '中压管网',
		type: 'func-switch',
	},
	{
		prop: 'diya',
		label: '低压管网',
		type: 'func-switch',
	},
	{
		prop: 'doorStationPoints',
		label: '门站',
		type: 'func-switch',
	},
	{
		prop: 'emergencyStationPoints',
		label: '应急站',
		type: 'func-switch',
	},
	{
		prop: 'gasFillPoints',
		label: '加气站',
		type: 'func-switch',
	},
	{
		prop: 'highPressureAdjustPoints',
		label: '高中压调压站',
		type: 'func-switch',
	},
	{
		prop: 'middlePressureAdjustPoints',
		label: '中低压调压站',
		type: 'func-switch',
	},
	{
		prop: 'monitorPoints',
		label: '压力监测点',
		type: 'func-switch',
	},
	{
		prop: 'leakAlarmPoints',
		label: '泄漏报警点',
		type: 'func-switch',
	},
	{
		prop: 'hiddenTroublePoints',
		label: '巡检隐患点',
		type: 'func-switch',
	},
	{
		prop: 'destructionPoints',
		label: '第三方破坏',
		type: 'func-switch',
	},
	{
		prop: 'lookAfterPoints',
		label: '工地看护点',
		type: 'func-switch',
	},
	{
		prop: 'ScramblePoints',
		label: '抢维事件',
		type: 'func-switch',
	},
	{
		prop: 'technologyAlarmPoints',
		label: '工艺报警',
		type: 'func-switch',
	},
	{
		prop: 'repairCarPoints',
		label: '巡检抢修车',
		type: 'func-switch',
	},
	{
		prop: 'repairPeoplePoints',
		label: '巡检抢修员',
		type: 'func-switch',
	},
	{
		prop: 'videoMonitorPoints',
		label: '视频监控',
		type: 'func-switch',
	},
	{
		prop: 'managePoints',
		label: '运行管理站',
		type: 'func-switch',
	},
	{
		prop: 'hiddenTroubleHeatPoints',
		label: '巡检隐患热力',
		type: 'func-switch',
	},
	{
		prop: 'repairHeatPoints',
		label: '抢维修热力',
		type: 'func-switch',
	},
	{
		prop: 'companyPoints',
		label: '公司',
		type: 'func-switch',
	},
	{
		prop: 'serviceNetworkPoints',
		label: '服务网点',
		type: 'func-switch',
	},
	{
		prop: 'workOrderTaskPoints',
		label: '工单任务点',
		type: 'func-switch',
	},
	{
		prop: 'iotAlarmPoints',
		label: '物联报警',
		type: 'func-switch',
	},
	{
		prop: 'householdPoints',
		label: '居民户',
		type: 'func-switch',
	},
	{
		prop: 'businessPoints',
		label: '工商户',
		type: 'func-switch',
	},
	{
		prop: 'customerHeatPoints',
		label: '客户热力',
		type: 'func-switch',
	},
	{
		prop: 'gasHeatPoints',
		label: '用气量热力',
		type: 'func-switch',
	},
	{
		prop: 'billHeatPoints',
		label: '欠费热力',
		type: 'func-switch',
	},
	{
		prop: 'workOrderHeatPoints',
		label: '工单热力',
		type: 'func-switch',
	},
	{
		prop: 'checkHeatPoints',
		label: '安检隐患热力',
		type: 'func-switch',
	},
]
