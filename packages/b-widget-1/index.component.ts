// 组件中文名唯一
export const name = 'b-组件1'
// 组件名唯一
export const type = 'b-widget-1'
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
		prop: 'title4',
		label: '标题4',
		type: 'func-input',
	},
	{
		prop: 'title5',
		label: '标题5',
		type: 'func-input',
	},
	{
		prop: 'title6',
		label: '标题6',
		type: 'func-input',
	},
	{
		prop: 'mainColor',
		label: '环形主颜色',
		type: 'func-color',
	},
	{
		prop: 'pointerColor',
		label: '圆点颜色',
		type: 'func-color',
	},
	{
		prop: 'titleColor',
		label: '标题颜色',
		type: 'func-color',
	},
	{
		prop: 'subTitleColor',
		label: '副标题颜色',
		type: 'func-color',
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			num1: 32,
			num2: 44,
			num3: 51,
			num4: 51,
			num5: 51,
			num6: 51,
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 800,
			height: 432,
		},
	},
	config: {
		title1: '昨日剩余隐患',
		title2: '今日发现隐患',
		title3: '隐患总数',
		title4: '今日处理隐患',
		title5: '隐患处理率',
		title6: '隐患未处理',
		mainColor: '#74FFF2',
		bgColor: '#285066',
		pointerColor: '#00FFCF',
		titleColor: '#fff',
		subTitleColor: '#74FFF2',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
