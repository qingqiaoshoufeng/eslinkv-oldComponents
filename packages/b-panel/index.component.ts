// 组件中文名唯一
export const name = 'b-box-panel'
// 组件名唯一
export const type = 'b-panel-1'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 配置
export const value = {
	api: {
		data: JSON.stringify({
			title: '压力监测点1',
			detailList: [{ label: '地址', value: 'xxxxx' }],
			gatewayDeviceNo: '',
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 960,
			height: 608,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		background: '#071F36',
	},
	widget: {
		componentVersion: version,
		name,
	},
}

// 自定义配置
export const customConfig = [
	{
		prop: 'background',
		label: '背景',
		type: 'func-color',
	},
]
