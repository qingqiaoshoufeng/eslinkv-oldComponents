// 组件中文名唯一
export const name = '首页左侧'
// 组件名唯一
export const type = 'mn-leftContent'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'title1',
		label: '标题1',
		type: 'func-input',
	},
	{
		prop: 'title2',
		label: '标题2',
		type: 'func-input',
	},
	{
		prop: 'title3',
		label: '标题3',
		type: 'func-input',
	},
	{
		prop: 'unit',
		label: '单位',
		type: 'func-input',
	},
	{
		prop: 'title4',
		label: '标题4',
		type: 'func-input',
	},
	{
		prop: 'title5',
		label: '标题5',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			rushRepair: 218,
			keepRepair: 179,
			changeRatio: 91.2,
			inspectionMileage: 5218,
			troubleProcessing: 524,
			troubleRatio: 80,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 440,
			height: 410,
		},
	},
	config: {
		title1: '本年抢修工单',
		title2: '本年维修工单',
		title3: '隐患整改率',
		title4: '本年巡检里程数',
		title5: '本年隐患处理数',
		unit: 'km',
	},

	widget: {
		componentVersion: version,
		name,
	},
}
