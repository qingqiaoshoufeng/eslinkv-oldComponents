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
			type: 'line',
			symbolSize: 16,
			symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFUSURBVHgBjVNBTsNADJzNgSPqDwhCHDjBE+AF8AT6A35AeQH8IPwg9AWBFyQ3JNqwOXFNOSEhgbG9bfE2SdWRnGy83rHXnjhsYkbnSHDJqyu2dOmt1L5xhxPX2PBkvSppBE/37Mnxi09+X+DIObUEYxBesIcCNcdIbARx1FRiTo9MMsIQZG9ODxobkUhm2dgVkkgqUbxSyh/eZiailK1gaykgF19USU2t9osXGTNebxxeHbRoI5IZTULVcp83OjMEOQ2jMFWEyvlB9nq0HW3UCz6b9LRogWF0JiQEDT7owPiqLQTT9Spcu0pYIFN8sVD+MR6oQnw3JrUSBOnKSMrOGHPT/SKaQBCe10Yqgroy7IqO8EQY7zzOXp0bhMyZjn4pvDCFQ7eA45+H+LmPUoVltKGlerrlPc8x4UeTMwzXU16KH0x455S/ViSNNpvwhGP3bMP/AKHGMIU7wYTyAAAAAElFTkSuQmCC',
			itemStyle: {
				color: color,
			},
			lineStyle: {
				color: color,
			},
			areaStyle: {
				color: new echarts.graphic.LinearGradient(
					0,
					0,
					0,
					1,
					[
						{
							offset: 0,
							color: hexToRgba(color, 0.5),
						},
						{
							offset: 1,
							color: hexToRgba(color, 0),
						},
					],
					false,
				),
			},
			data: item.y
		})
	})
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	return option
}
