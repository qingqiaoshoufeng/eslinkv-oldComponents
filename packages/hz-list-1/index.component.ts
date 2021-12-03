// 组件中文名唯一
export const name = 'hz-列表-1'
// 组件名唯一
export const type = 'hz-list-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置

export const customConfig = [
	{
		prop: 'tabDefaultValue',
		label: 'tab默认选项',
		type: 'func-input',
	},
	{
		prop: 'titles',
		label: '分组',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: '名称',
				type: 'func-input',
			},
			{
				prop: 'sceneId',
				label: '场景id',
				type: 'func-input',
			},
		],
	},
]
// export const customConfig = [
// 	{
// 		prop: 'tabDefaultValue',
// 		label: 'tab默认选项',
// 		type: 'func-input',
// 	},
// 	{
// 		prop: 'title1',
// 		label: '标题1',
// 		type: 'func-input',
// 	},
// 	{
// 		prop: 'title2',
// 		label: '标题2',
// 		type: 'func-input',
// 	},
// 	{
// 		prop: 'title3',
// 		label: '标题3',
// 		type: 'func-input',
// 	},
// ]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			processed: 0,
			unProcessed: 0,
			realTimeList: [
				{
					content: '新星小区燃气泄漏',
					address: '三墩镇三墩街100号',
					id: 1,
					status: 0,
					time: '11-02 03:30:09',
					timeInSeconds: 1,
					statusText: '已处理',
					lng: 120.0827009281194,
					lat: 30.323955044878687,
					eventType: 1,
				},
				{
					content: '易沙创业园燃气泄漏',
					address: '下沙二号大街九号大街交叉口',
					id: 10,
					status: 1,
					time: '11-02 03:30:11',
					timeInSeconds: 2,
					statusText: '未处理',
					lng: 120.3516411781311,
					lat: 30.31174575966139,
					eventType: 1,
				},
				{
					content: '临平桂花城管道破裂',
					address: '人民大道746号',
					id: 3,
					status: 1,
					time: '11-02 03:30:19',
					timeInSeconds: 3,
					statusText: '未处理',
					lng: 120.31007766723633,
					lat: 30.4205892087966,
					eventType: 0,
				},
				{
					content: '三里亭社区燃气泄漏',
					address: '江干区三里亭东苑11',
					id: 4,
					status: 1,
					time: '11-02 03:32:09',
					timeInSeconds: 4,
					statusText: '未处理',
					lng: 120.19330281642914,
					lat: 30.296621575040618,
					eventType: 1,
				},
				{
					content: '西溪永乐城管道破裂',
					address: '余杭区仓前街道景兴路666号',
					id: 5,
					status: 1,
					time: '11-02 03:31:12',
					timeInSeconds: 5,
					statusText: '未处理',
					lng: 120.00046491622925,
					lat: 30.276487794570983,
					eventType: 0,
				},
				{
					content: '萧山商业城管道破裂',
					address: '商城西路与商惠街交叉路口',
					id: 11,
					status: 0,
					time: '11-03 03:38:00',
					statusText: '已处理',
					timeInSeconds: 6,
					lng: 120.28686046600342,
					lat: 30.169691809970953,
					eventType: 0,
				},
				{
					content: '金色家园管道破裂',
					address: '上城区滨江·金色家园6幢',
					id: 7,
					status: 0,
					time: '11-23 06:30:22',
					statusText: '已处理',
					timeInSeconds: 7,
					lng: 120.17970552712964,
					lat: 30.224503168144224,
					eventType: 0,
				},
				{
					content: '中南购物中心燃气泄漏',
					address: '滨江区江南大道1090号',
					id: 8,
					status: 1,
					time: '11-23 06:33:22',
					statusText: '未处理',
					timeInSeconds: 8,
					lng: 120.18694803585602,
					lat: 30.196626964602952,
					eventType: 1,
				},
				{
					content: '兽王电商产业园燃气泄漏',
					address: '萧山经济技术开发区钱农东路257号',
					id: 6,
					status: 1,
					time: '11-23 06:30:29',
					timeInSeconds: 9,
					statusText: '未处理',
					lng: 120.30192375183105,
					lat: 30.239140930210528,
					eventType: 1,
				},
				{
					content: '羊山公寓管道破裂',
					address: '余杭区羊城路440号',
					id: 2,
					status: 0,
					time: '11-24 06:30:28',
					timeInSeconds: 10,
					statusText: '已处理',
					lng: 119.96636867523192,
					lat: 30.38109446979586,
					eventType: 1,
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 583,
			height: 1161,
		},
		position: {
			value: 'relative',
		},
	},
	config: {
		title1: '工艺报警',
		title2: '抢维事件',
		title3: '巡检隐患',
		tabDefaultValue: 0,
		titles: [
			{
				name: '标题111111',
				sceneId: '',
			},
		],
	},
	widget: {
		componentVersion: version,
		name,
	},
}

export const eventTypes = [
	{ key: 'click1', label: '点击事件-tab' },
	{ key: 'click2', label: '点击事件-是否处理' },
	{ key: 'click3', label: '点击事件-切换等级' },
	{ key: 'click4', label: '点击事件-隐患详情' },
	{ key: 'click5', label: '点击事件-清空隐患列表' },
]
