// 组件中文名唯一
export const name = '扩展配置列表'
// 组件名唯一
export const type = 'mn-list-config'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = [
	{
		prop: 'tabDefaultValue',
		label: 'tab默认选项',
		type: 'func-input',
	},
	{
		prop: 'scale',
		label: '缩放大小',
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
				label: '请求地址',
				type: 'func-input',
			},
			{
				prop: 'componentName',
				label: '对应组件',
				type: 'func-input',
			},
			{
				prop: 'status',
				label: '下拉参数名称',
				type: 'func-input',
			},
			{
				prop: 'type',
				label: '勾选参数名称',
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
			{
				prop: 'icon',
				label: '列表icon',
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
	{
		prop: 'renderMap',
		label: '映射列表',
		type: 'func-group',
		children: [
			{
				prop: 'key',
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
	api: {},
	layout: {
		// 宽高
		size: {
			width: 950,
			height: 1870,
		},
		position: {
			value: 'relative',
		},
	},
	config: {
		tabDefaultValue: '任务工单',
		selectDefaultValue: '1',
		checkDefaultValue: '0',
		scale: '0.5',
		titles: [
			{
				name: '安检隐患',
				url: '/meineng/service/troubleList',
				componentName: 'listItemWorkeffortTast',
				status: 'result',
				type: 'level',
			},
			{
				name: '任务工单',
				url: '/meineng/service/workorder',
				componentName: 'listItemWorkeffortTast',
				status: 'status',
				type: 'priority_id',
			},
			{
				name: '欠费排行',
				url: '/meineng/revenue/oweRank',
				componentName: 'ranking1',
				status: '',
				type: '',
			},
			// {
			// 	name: '用气排行',
			// 	url: 'WorkeffortTast',
			// 	componentName: 'ranking',
			// 	status: '',
			// 	type: '',
			// },
		],
		selectList: [
			{
				name: '一般',
				value: '2',
				type: '安检隐患',
				icon: '',
			},
			{
				name: '紧急',
				value: '1',
				type: '安检隐患',
				icon: '',
			},
			{
				name: '一般',
				value: '1',
				type: '任务工单',
				icon: '',
			},
			{
				name: '紧急',
				value: '2',
				type: '任务工单',
				icon: '',
			},
			{
				name: '特急',
				value: '3',
				type: '任务工单',
				icon: '',
			},
		],
		checkList: [
			{
				name: '未处理',
				value: '0',
				type: '安检隐患',
			},
			{
				name: '已处理',
				value: '1',
				type: '安检隐患',
			},
			// "status": "处理状态（必传）：0：未处理；1：已处理；2：查全部"
			{
				name: '未处理',
				value: '0',
				type: '任务工单',
			},
			{
				name: '已处理',
				value: '1',
				type: '任务工单',
			},
		],
		themeColor: '',
		renderMap: [
			{
				key: 'name',
				value: 'oper_name',
				type: '安检隐患',
			},
			{
				key: 'time',
				value: 'create_time',
				type: '安检隐患',
			},
			{
				key: 'desc',
				value: 'problem_des',
				type: '安检隐患',
			},
			{
				key: 'status',
				value: 'result',
				type: '安检隐患',
			},
			{
				key: 'name',
				value: 'name',
				type: '任务工单',
			},
			{
				key: 'time',
				value: 'create_time',
				type: '任务工单',
			},
			{
				key: 'desc',
				value: 'user_address',
				type: '任务工单',
			},
			{
				key: 'status',
				value: 'status_desc',
				type: '任务工单',
			},
			{
				key: 'name',
				value: 'cust_name',
				type: '欠费排行',
			},
			{
				key: 'time',
				value: 'first_qf_date',
				type: '欠费排行',
			},
			{
				key: 'desc',
				value: 'addr_desc',
				type: '欠费排行',
			},
			{
				key: 'amount',
				value: 'qf_amount',
				type: '欠费排行',
			},
			{
				key: 'count',
				value: 'qf_cnt',
				type: '欠费排行',
			},

			// 			"qf_cnt": "欠费笔数",
			// "qf_amount": "欠费金额",
			// "first_qf_date": "最早欠费时间",
			// "cust_name": "客户",
			// "addr_desc": "地址"
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
