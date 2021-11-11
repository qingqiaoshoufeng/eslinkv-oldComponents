// 组件中文名唯一
export const name = '标题二'
// 组件名唯一
export const type = 'b-title-2'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
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
// 配置
export const value = {
	layout: {
		// 宽高
		size: {
			width: 812,
			height: 80,
		},
	},
	config: {
		titles: [
			{
				name: '标题1',
				sceneId: '',
			},
		],
	},
	widget: {
		componentVersion: version,
		name,
	},
}
