// 组件中文名唯一
export const name = '扩展配置列表'
// 组件名唯一
export const type = 'yq-list-config'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.4'
// 自定义配置
export const customConfig = [
	{
		prop: 'tabDefaultValue',
		label: 'tab默认选项',
		type: 'func-input',
	},
	{
		prop: 'selectDefaultValue',
		label: '下拉默认选项',
		type: 'func-input',
	},
	{
		prop: 'checkDefaultValue',
		label: '勾选默认选项',
		type: 'func-input',
	},

	{
		prop: 'themeColor',
		label: '列表主体颜色',
		type: 'func-input',
	},
	{
		prop: 'titles',
		label: 'tab分组',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: '名称',
				type: 'func-input',
			},
			{
				prop: 'url',
				label: '请求类型',
				type: 'func-input',
			},
		],
	},
	{
		prop: 'selectList',
		label: '下拉列表',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: '名称',
				type: 'func-input',
			},
			{
				prop: 'value',
				label: '值',
				type: 'func-input',
			},
			{
				prop: 'type',
				label: '归属类型',
				type: 'func-input',
			},
		],
	},
	{
		prop: 'checkList',
		label: '勾选列表',
		type: 'func-group',
		children: [
			{
				prop: 'name',
				label: '名称',
				type: 'func-input',
			},
			{
				prop: 'value',
				label: '值',
				type: 'func-input',
			},
			{
				prop: 'type',
				label: '归属类型',
				type: 'func-input',
			},
		],
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		// data: JSON.stringify({
		// 	processed: 0,
		// 	unProcessed: 0,
		// 	realTimeList: [
		// 		{
		// 			hiddenName: '巡检隐患1',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '未处理',
		// 			hiddenLevel: '紧急',
		// 			id: '1',
		// 		},
		// 		{
		// 			hiddenName: '工地看护2',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '已处理',
		// 			hiddenLevel: '蹲守',
		// 			id: '2',
		// 		},
		// 		{
		// 			hiddenName: '巡检隐患3',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '未处理',
		// 			hiddenLevel: '一般',
		// 			id: '3',
		// 		},
		// 		{
		// 			hiddenName: '第三方破坏4',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '已处理',
		// 			hiddenLevel: '一般',
		// 			id: '4',
		// 		},
		// 		{
		// 			hiddenName: '巡检隐患3',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '未处理',
		// 			hiddenLevel: '一般',
		// 			id: '5',
		// 		},
		// 		{
		// 			hiddenName: '第三方破坏4',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '已处理',
		// 			hiddenLevel: '一般',
		// 			id: '6',
		// 		},
		// 		{
		// 			hiddenName: '第三方破坏4',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '已处理',
		// 			hiddenLevel: '一般',
		// 			id: '7',
		// 		},
		// 		{
		// 			hiddenName: '第三方破坏4',
		// 			hiddenTime: '11-03 08:23:27',
		// 			address: '宁围镇镇宁路1400号',
		// 			hiddenStatus: '已处理',
		// 			hiddenLevel: '一般',
		// 			id: '8',
		// 		},
		// 	],
		// }),
	},
	layout: {
		// 宽高
		size: {
			width: 920,
			height: 1660,
		},
		position: {
			value: 'relative',
		},
	},
	config: {
		// title1: '工艺报警',
		// title2: '抢维事件',
		// title3: '巡检隐患',
		tabDefaultValue: 'WorkeffortTast',
		selectDefaultValue: '1',
		checkDefaultValue: '1',
		titles: [
			{
				name: '标题111111',
				url: 'GasUseRanking',
			},
			{
				name: '标题111111',
				url: 'WorkeffortTast',
			},
		],
		selectList: [
			{
				name: '选项一',
				value: '1',
			},
			{
				name: '选项二',
				value: '2',
			},
		],
		checkList: [
			{
				name: '选项一',
				value: '1',
			},
			{
				name: '选项二',
				value: '2',
			},
		],
		themeColor: '',
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
