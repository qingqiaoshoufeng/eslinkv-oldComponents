/**
 *  item 配置文件
 */
// 线上地址
// const baseUrl = 'https://kv-etbc.eslink.com/ceshi'
// 本地调试地址
const baseUrl = '/ceshi'
const requestAndRenderConfig = {
	WorkeffortTast: {
		name: '工单任务',
		url: `${baseUrl}/service/workOrder`,
		componentName: 'listItemWorkeffortTast',
		paramsKeyMap: {
			// priority_id: '紧急程度（必传）：1：一般；2：紧急；3：特急',
			// status: '处理状态（必传）：0：未处理；1：已处理；空字符串：查全部',
			repairState: 'status',
			type: 'priority_id',
		},
	},
	GasUseRanking: {
		name: '用气排行',
		url: `${baseUrl}/service/workOrder`,
		componentName: 'ranking',
		paramsKeyMap: {
			// priority_id: '紧急程度（必传）：1：一般；2：紧急；3：特急',
			// status: '处理状态（必传）：0：未处理；1：已处理；空字符串：查全部',
			repairState: 'status',
			type: 'priority_id',
		},
	},
	ArrearRanking: {
		name: '欠费排行',
		url: `${baseUrl}/pay/arrearsRank`,
		componentName: 'ranking',
		paramsKeyMap: {
			// priority_id: '紧急程度（必传）：1：一般；2：紧急；3：特急',
			// status: '处理状态（必传）：0：未处理；1：已处理；空字符串：查全部',
			// repairState: 'status',
			// type: 'priority_id',
		},
	},
	DeviceWaring: {
		name: '设备报警',
		url: `${baseUrl}/service/workOrder`,
		componentName: 'ranking',
		paramsKeyMap: {
			// priority_id: '紧急程度（必传）：1：一般；2：紧急；3：特急',
			// status: '处理状态（必传）：0：未处理；1：已处理；空字符串：查全部',
			repairState: 'status',
			type: 'priority_id',
		},
	},
	CheckDanger: {
		name: '安检隐患',
		url: `${baseUrl}/service/workOrder`,
		componentName: 'ranking',
		paramsKeyMap: {
			// priority_id: '紧急程度（必传）：1：一般；2：紧急；3：特急',
			// status: '处理状态（必传）：0：未处理；1：已处理；空字符串：查全部',
			repairState: 'status',
			type: 'priority_id',
		},
	},
}
export type dataType = Record<string, string>

// export interface requestConfigType {
// 	method?: 'POST' // or 'PUT'
// 	body?: string | Record<string, string> // data can be `string` or {object}!
// 	headers?: Record<string, string>
// }

export default requestAndRenderConfig
