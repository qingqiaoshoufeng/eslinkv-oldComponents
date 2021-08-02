'use strict'
exports.__esModule = true
exports.value = exports.customConfig = exports.version = exports.type = exports.name = void 0
// 组件中文名唯一
exports.name = '高德地图'
// 组件名唯一
exports.type = 'o-map-gaode'
// 检测当前组件名，版本唯一，类似npm发布策略
exports.version = '1.0.1'
// 自定义配置
exports.customConfig = []
// 配置
exports.value = {
	api: {
		// 接口请求数据默认值
		data: JSON.stringify({
			zoom: 8,
			mapKey: '8081bdaac8258a8a4a6244bf16084fed',
			mapPlugins: '&plugin=AMap.Scale,AMap.ToolBar,AMap.DistrictSearch',
			mapVersion: '2.0',
			mapStyle: 'amap://styles/e0e1899c1695e012c70d0731a5cda43c',
			center: [120.310539, 30.587221],
		}),
	},
	layout: {
		// 宽高
		size: {
			width: 1000,
			height: 500,
		},
		position: {
			value: 'relative',
		},
	},
	// 自定义配置默认值
	config: {},
	widget: {
		componentVersion: exports.version,
		name: exports.name,
	},
}
