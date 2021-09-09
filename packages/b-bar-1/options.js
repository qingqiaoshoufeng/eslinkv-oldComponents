import { getCommonOption } from '../../examples/utils'

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const req = {
			type: 'bar',
			name: item.name,
			barWidth: 10,
			smooth: true,
			symbol: 'none',
			symbolSize: 5,
			data: item.y,
			itemStyle: {}
		}
		if (config.isLinearGradient) {
			const color = config.colorTheme.colorDisk[index % config.colorTheme.colorDisk.length]
			req.itemStyle.color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				offset: 0,
				color: color // 0% 处的颜色
			}, {
				offset: 1,
				color: 'transparent' // 100% 处的颜色
			}], false)
		}
		option.series.push(req)
	})
	option.legend.data.push({
		name: data.line.name,
		textStyle: {
			color: 'rgba(255, 255, 255, 1)',
			fontSize: 16,
			lineHeight: 16,
		},
	})
	option.yAxis.push({
		name: '%',
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
			},
		},
		axisLine: {
			show: false,
		},
	})
	option.series.push({
		name: data.line.name,
		type: 'line',
		symbolSize: 16,
		symbol: config.pointer,
		data: data.line.y,
		yAxisIndex: 1,
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left += config.left
	option.grid.right = 30
	return option
}
