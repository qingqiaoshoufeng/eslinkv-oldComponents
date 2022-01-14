// 组件中文名唯一
export const name = '美能面积图'
// 组件名唯一
export const type = 'mn-line-area'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.1'
// 自定义配置
export const customConfig = [
	{
		prop: 'title',
		label: 'y轴单位',
		type: 'func-input',
	},
	{
		prop: 'symbolSize',
		label: '点位大小',
		type: 'func-input',
	},
	{
		prop: 'left',
		label: '缩进',
		type: 'func-number',
	},
	{
		prop: 'smooth',
		label: '平滑曲线',
		type: 'func-switch',
	},
	{
		prop: 'area',
		label: '面积图',
		type: 'func-switch',
	},
	{
		prop: 'datazoom',
		label: '区域缩放',
		type: 'func-switch',
	},
	{
		prop: 'scale',
		label: 'y轴是否从0开始',
		type: 'func-switch',
	},
	{
		prop: 'rotate',
		label: 'x轴标签旋转',
		type: 'func-input',
	},
	{
		prop: 'lineIcon',
		label: '图标',
		type: 'func-input',
	},
	{
		prop: 'showPercent',
		label: '默认展示百分比',
		type: 'func-input',
	},
	{
		prop: 'lineWidth',
		label: '线宽',
		type: 'func-input',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [250, 350, 120, 290, 240, 250],
					name: '数据1',
				},
				{
					x: ['08/12', '08/13', '08/14', '08/15', '08/16', '08/17'],
					y: [150, 250, 420, 390, 140, 350],
					name: '数据2',
				},
			],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 465,
			height: 255,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		title: '数量',
		symbolSize: 10,
		smooth: true,
		area: true,
		datazoom: true,
		left: 0,
		rotate: '45',
		showPercent: '0,75',
		scale: false,
		lineWidth: '1',
		lineIcon:
			'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgBjVNBTsNADJzNgSPqDwhCHDjBE+AF8AT6A35AeQH8IPwg9AWBFyQ3JNqwOXFNOSEhgbG9bfE2SdWRnGy83rHXnjhsYkbnSHDJqyu2dOmt1L5xhxPX2PBkvSppBE/37Mnxi09+X+DIObUEYxBesIcCNcdIbARx1FRiTo9MMsIQZG9ODxobkUhm2dgVkkgqUbxSyh/eZiailK1gaykgF19USU2t9osXGTNebxxeHbRoI5IZTULVcp83OjMEOQ2jMFWEyvlB9nq0HW3UCz6b9LRogWF0JiQEDT7owPiqLQTT9Spcu0pYIFN8sVD+MR6oQnw3JrUSBOnKSMrOGHPT/SKaQBCe10Yqgroy7IqO8EQY7zzOXp0bhMyZjn4pvDCFQ7eA45+H+LmPUoVltKGlerrlPc8x4UeTMwzXU16KH0x455S/ViSNNpvwhGP3bMP/AKHGMIU7wYTyAAAAAElFTkSuQmCC',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
