import { hexToRgba, getCommonOption } from '../../examples/utils'

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	config.hour
		? (option.xAxis.axisLabel.formatter = function (value) {
				// 2021-09-28 14:00:34
				if (value.slice(14, 16) === '00') {
					return value.slice(10, 16)
				} else {
					return ''
				}
		  })
		: ''
	option.tooltip.trigger = 'axis'
	option.tooltip = {
		show: true,
		trigger: 'axis',
		textStyle: {
			fontSize: 28,
		},
	}
	const clearAxisOptions = {
		splitLine: {
			show: false,
		},
		axisLabel: {
			show: false,
		},
		boundaryGap: false,
	}
	option.xAxis = { ...clearAxisOptions, type: 'category' }
	option.yAxis = { ...clearAxisOptions }

	value.forEach((item, index) => {
		max = Math.max(...[...item.y, max])
		const color =
			config.colorTheme.colorDisk[
				index % config.colorTheme.colorDisk.length
			]
		option.series.push({
			name: item.name,
			type: 'line',
			symbolSize: 16,
			symbol: config.lineIcon || 'none',
			showSymbol: !!config.lineIcon,
			itemStyle: {
				color: config.lineColor || color,
			},
			lineStyle: {
				color: config.lineColor || color,
			},
			areaStyle: {
				color: config.areaColor || color,
			},
			data: item.y,
			smooth: config.smooth,
		})
	})
	option.grid = {
		left: 0,
		bottom: 0,
		right: 0,
		top: 0,
	}
	// if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	return option
}
