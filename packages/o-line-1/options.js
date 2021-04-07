import { getCommonOption, hexToRgba } from '../../examples/utils'

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color =
			config.colorTheme.colorDisk[
				index % config.colorTheme.colorDisk.length
			]
		option.series.push({
			name: item.name,
			type: 'line',
			data: item.y,
			lineStyle: {
				color,
			},
			areaStyle: {
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
			},
			symbol: 'emptyCircle',
			showSymbol: false, // 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
			itemStyle: {
				color: color,
			},
			smooth: true,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	return option
}
