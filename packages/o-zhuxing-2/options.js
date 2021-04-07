import {getCommonOption} from "../../examples/utils";

export default (data, config) => {
	let max = 0
	const value = data.value || []
	const option = getCommonOption(value, config)
	value.forEach(item => {
		max = Math.max(...[...item.y, max])
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
