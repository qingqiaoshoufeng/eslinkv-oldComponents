import { getCommonOption, hexToRgba } from '../../examples/utils'

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	const dataZoom = {
		type: 'inside',
		xAxisIndex: 0,
		start: config.showPercent.split(',')[0],
		end: config.showPercent.split(',')[1],
	}
	if (config.datazoom) {
		option.dataZoom = dataZoom
	}
	option.legend.itemHeight = 2
	option.tooltip.trigger = 'axis'

	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color =
			config.colorTheme.colorDisk[
				index % config.colorTheme.colorDisk.length
			]

		// if (config.datazoom) {
		// 	option.grid.bottom = 80
		// 	option.dataZoom = [
		// 		{
		// 			type: 'slider',
		// 			backgroundColor: 'rgba(0,0,0,0)',
		// 			fillerColor: 'rgba(0, 221, 255, 0.5)',
		// 			dataBackground: {
		// 				areaStyle: {
		// 					color: '#023066',
		// 					opacity: 1,
		// 				},
		// 				lineStyle: {
		// 					color: '#184E8D',
		// 				},
		// 			},
		// 		},
		// 		{ type: 'inside' },
		// 	]
		// }
		option.series.push({
			name: item.name,
			type: 'line',
			data: item.y,
			lineStyle: {
				color,
				width: config.lineWidth,
			},
			areaStyle: config.area
				? {
						normal: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: hexToRgba(color, 0.6),
									},
									{
										offset: 1,
										color: hexToRgba(color, 0),
									},
								],
								false,
							),
						},
				  }
				: null,
			symbolSize: config.symbolSize,
			symbol: config.lineIcon || 'emptyCircle',
			showSymbol: !!config.lineIcon,
			itemStyle: {
				color: color,
			},
			smooth: config.smooth,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left += config.left

	console.log(option)
	return option
}
