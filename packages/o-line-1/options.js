import { hexToRgba } from '../../examples/utils'

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = {
		grid: {
			top: 40,
			left: 40,
			bottom: 30,
			right: 0,
		},
		color: config.colorTheme.colorDisk,
		legend: {
			show: value.length > 1,
			data: value.map(item => {
				return {
					name: item.name,
					textStyle: {
						color: 'rgba(255, 255, 255, 1)',
						fontSize: 16,
						lineHeight: 16,
					},
				}
			}),
		},
		tooltip: {
			show: true,
		},
		xAxis: {
			type: 'category',
			axisTick: {
				show: false,
			},
			splitLine: {
				show: false,
			},
			boundaryGap: ['10%', '10%'],
			axisLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255,.1)',
				},
			},
			axisLabel: {
				interval: 0,
				textStyle: {
					color: 'rgba(255, 255, 255, 1)',
					fontSize: 16,
					lineHeight: 16,
				},
			},
			data: value[0] && value[0].x,
		},
		yAxis: {
			name: config.title,
			type: 'value',
			nameTextStyle: {
				padding: [0, 40, 0, 0],
				color: '#fff'
			},
			axisTick: {
				show: false,
			},
			splitNumber: 4,
			axisLine: {
				show: false,
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255,0.2)',
				},
			},
			axisLabel: {
				textStyle: {
					color: 'rgba(255, 255, 255, 1)',
					fontSize: 16,
					lineHeight: 16,
				},
			},
		},
		series: [],
	}
	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color = config.colorTheme.colorDisk[index % config.colorTheme.colorDisk.length]
		option.series.push({
			name: item.name,
			type: 'line',
			data: item.y,
			lineStyle: {
				color
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
				color: color
			},
			smooth: true,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	console.log(option.grid.left, max)
	return option
}
