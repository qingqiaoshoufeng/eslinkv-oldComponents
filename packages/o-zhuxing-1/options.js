import {getCommonOption} from "../../examples/utils";

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		option.series.push({
			type: 'bar',
			name: item.name,
			barWidth: 10,
			smooth: true,
			symbol: 'none',
			symbolSize: 5,
			label: {
				show: true,
				position: 'top',
				formatter: '{a}',
				color:
					config.colorTheme.colorDisk[
						index % config.colorTheme.colorDisk.length
					],
				backgroundColor:
					config.colorTheme.colorDisk[
						index % config.colorTheme.colorDisk.length
					],
				fontSize: 1,
				width: 10,
				distance: 2,
				height: 4,
				rich: {
					a: {
						color: '#fff',
					},
				},
			},
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{ offset: 0, color: 'rgba(255,255,255,.6)' },
						{ offset: 1, color: 'rgba(255,255,255,0)' },
					]),
				},
			},
			data: item.y,
		})
	})
	if (data.percent) {
		option.yAxis.push({
			name: '%',
			type: 'value',
			nameTextStyle: {
				padding: [0, 0, 0, 10],
				color: '#fff',
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
		})
		option.series.push({
			name: data.percent.name,
			type: 'line',
			yAxisIndex: 1,
			data: data.percent.y,
			symbol: 'emptyCircle',
			showSymbol: false, // 是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示。
			itemStyle: {
				color: config.lineColor
			}
		})
		option.grid.right = 40
	}
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	return option
}
