import { getCommonOption } from '../../examples/utils'

export default (data, config) => {
	// debugger
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	const lineIndex = value.length
	const dataZoom = {
		type: 'inside',
		xAxisIndex: 0,
		start: config.showPercent.split(',')[0],
		end: config.showPercent.split(',')[1],
	}
	value.forEach((item, index) => {
		let mergeOptionMap = {
			0: {
				barWidth: config.barWithAndPosition.split(',')[0],
				itemStyle: {
					borderColor: '#74FFF2',
					borderWidth: 2,
				},
			},
			1: {
				barWidth: config.barWithAndPosition.split(',')[1],
				barGap: `-${config.barWithAndPosition.split(',')[2]}%`,
			},
		}

		max = Math.max(...[...item.y, max])
		const req = {
			type: 'bar',
			name: item.name,
			barWidth: 10,
			smooth: true,
			symbol: 'none',
			symbolSize: 5,
			data: item.y,
			itemStyle: {},
			...mergeOptionMap[index],
		}
		if (config.isLinearGradient) {
			const color =
				config.colorTheme.colorDisk[
					index % config.colorTheme.colorDisk.length
				]
			req.itemStyle.color = new echarts.graphic.LinearGradient(
				0,
				0,
				0,
				1,
				[
					{
						offset: 0,
						color: color, // 0% 处的颜色
					},
					{
						offset: 1,
						color: 'transparent', // 100% 处的颜色
					},
				],
				false,
			)
		}
		option.series.push(req)
	})

	// x 坐标 日期倾斜
	option.legend.data.map(item => {
		item.textStyle.fontSize = 16
		return item
	})

	option.xAxis.axisLabel.interval = 0
	option.xAxis.axisLabel.rotate = 20
	option.xAxis.axisLabel.textStyle.fontSize = 16
	option.yAxis[0].axisLabel.textStyle.fontSize = 16
	option.yAxis[0].nameTextStyle.fontSize = 16

	option.yAxis.push({
		name: config.title1,
		nameTextStyle: {
			color: '#fff',
			fontSize: 16,
			align: 'left',
			padding: [2, 6, 5, 8],
			lineHeight: 10,
		},
		type: 'value',
		splitLine: {
			show: false,
		},
		show: true,
		axisTick: {
			show: false,
			textStyle: {
				color: '#fff',
			},
		},
		axisLabel: {
			textStyle: {
				show: true,
				color: '#fff',
				fontSize: 16,
			},
		},
		axisLine: {
			show: false,
		},
	})
	option.series.push({
		name: data.line.name,
		type: 'line',
		symbolSize: config.symbolSize,
		lineStyle: {
			color: config.colorTheme.colorDisk[lineIndex],
			width: config.lineWidth,
			type: config.lineType,
		},
		symbol: config.pointer,
		data: data.line.y,
		yAxisIndex: config.yAxisIndex.split(',')[lineIndex],
	})
	option.legend.data.push({
		name: data.line.name,
		textStyle: {
			color: 'rgba(255, 255, 255, 1)',
			fontSize: 16,
			lineHeight: 16,
		},
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left += config.left
	option.grid.right = 44
	option.dataZoom = dataZoom
	return option
}
