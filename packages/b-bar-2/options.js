import { getCommonOption } from '../../examples/utils'

export default (data, config) => {
	debugger
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	const lineIndex = value.length
	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const req = {
			type: config.beforeseriesType,
			name: item.name,
			barWidth: 10,
			smooth: true,
			symbol: 'none',
			symbolSize: 5,
			data: item.y,
			itemStyle: {},
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
		item.textStyle.fontSize = 24
		return item
	})

	option.xAxis.axisLabel.interval = 0
	option.xAxis.axisLabel.rotate = 20
	option.xAxis.axisLabel.textStyle.fontSize = 20
	option.yAxis[0].axisLabel.textStyle.fontSize = 24
	option.yAxis[0].nameTextStyle.fontSize = 24
	option.yAxis[0].min = config.min1
	option.yAxis[0].max = 'max'
	option.yAxis.push({
		name: config.title1,
		nameTextStyle: {
			color: '#fff',
			fontSize: 24,
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
				fontSize: 24,
			},
		},
		axisLine: {
			show: false,
		},
		min: config.min2 === 'min' && Math.min(...data.line.y),
		splitNumber: config.splitNumber1,
		max: config.min2 === 'min' && Math.max(...data.line.y),
	})
	option.series.push({
		name: data.line.name,
		type: 'line',
		symbolSize: 16,
		lineStyle: {
			color: config.colorTheme.colorDisk[lineIndex],
		},
		symbol: config.pointer,
		data: data.line.y,
		yAxisIndex: 1,
	})
	option.legend.data.push({
		name: data.line.name,
		textStyle: {
			color: 'rgba(255, 255, 255, 1)',
			fontSize: 24,
			lineHeight: 16,
		},
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left += config.left
	option.grid.right = config.right || 44
	console.log(option, 'option')
	return option
}
