// 组件中文名唯一
export const name = 'mapbox'
// 组件名唯一
export const type = 'o-map-mapbox'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'home',
		label: '首页场景id',
		type: 'func-input',
	},
	{
		prop: 'run',
		label: '运行场景id',
		type: 'func-input',
	},
	{
		prop: 'service',
		label: '服务场景id',
		type: 'func-input',
	},
	{
		prop: 'project',
		label: '工程场景id',
		type: 'func-input',
	},
	{
		prop: 'run-zoom',
		label: '运行页地图缩放等级',
		type: 'func-input',
	},
	{
		prop: 'service-zoom',
		label: '服务页地图缩放等级',
		type: 'func-input',
	},
	{
		prop: 'project-zoom',
		label: '工程页地图缩放等级',
		type: 'func-input',
	},
	{
		prop: 'pitch',
		label: '地图倾斜度',
		type: 'func-input',
	}
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: '',
	},
	layout: {
		// 宽高
		size: {
			width: 3271,
			height: 1380,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		home: '',
		run: '',
		project: '',
		service: '',
		'runZoom': 11.5,
		'serviceZoom': 11.5,
		'projectZoom': 11.5,
		'pitch':60
	},
	widget: {
		componentVersion: version,
		name,
	},
}
