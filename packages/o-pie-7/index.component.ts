// 组件中文名唯一
export const name = '轮播饼图'
// 组件名唯一
export const type = 'o-pie-7'
// 检测当前组件名，版本唯一，类似npm发布策略
export const version = '1.0.0'
// 自定义配置
export const customConfig = [
	{
		prop: 'suffix',
		label: '后缀',
		type: 'func-input',
	},
	{
		prop: 'background',
		label: '背景图片',
		type: 'func-background'
	},
]
// 配置
export const value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			value: [
				{ value: 12.5, des: '111', title: '南门站' },
				{ value: 12.5, des: '', title: '北门站' },
				{ value: 12.5, des: '', title: '下沙门站' },
				{ value: 12.5, des: '', title: '江东门站' },
				{ value: 12.5, des: '', title: '所前门站' },
				{ value: 12.5, des: '', title: '杭州东站' },
				{ value: 12.5, des: '', title: '杭州西站' },
			]
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 480,
			height: 276,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {
		background: 'https://placeholder.idcd.com/?w=300&h=300&text=300x300',
		suffix: '%',
	},
	widget: {
		componentVersion: version,
		name,
	},
}
