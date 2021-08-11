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
	if (max !== undefined) option.grid.left += (max.toString().length - 3) * 12
	option.grid.left += config.left
	return option
}
