export default (data, config) => {
	let max
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
			type: 'value',
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
	value.forEach(item => {
		max = Math.max(...item.y)
		option.series.push({
			type: 'bar',
			name: item.name,
			barWidth: 10,
			smooth: true,
			symbol: 'none',
			symbolSize: 5,
			data: item.y,
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	return option
}
