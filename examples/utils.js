/**
 * @description 加载三方包
 */
export function loadJs(src, value) {
	if (!src) {
		return
	}
	if (typeof src === 'string') {
		return new Promise(resolve => {
			if (window[value]) {
				resolve()
			} else {
				const el = document.createElement('script')
				el.src = src
				el.onload = () => {
					resolve()
					if (!window[value]) window[value] = true
				}
				document.head.appendChild(el)
			}
		})
	} else {
		const p = []
		src.forEach((item, index) => {
			p.push(
				new Promise(resolve => {
					if (window[value[index]]) {
						resolve()
					} else {
						const el = document.createElement('script')
						el.src = item
						el.onload = () => {
							resolve()
							if (!window[value]) window[value] = true
						}
						document.head.appendChild(el)
					}
				}),
			)
		})
		return Promise.all(p)
	}
}

/**
 *
 * @param hex 例如:"#23ff45"
 * @param opacity 透明度
 * @returns {string}
 */
export function hexToRgba(hex, opacity) {
	if (hex.includes('rgba')) {
		const arr = hex.split(',')
		arr[3] = arr[3].replace(/\d+/, opacity)
		return arr.toString()
	}
	return (
		'rgba(' +
		parseInt('0x' + hex.slice(1, 3)) +
		',' +
		parseInt('0x' + hex.slice(3, 5)) +
		',' +
		parseInt('0x' + hex.slice(5, 7)) +
		',' +
		opacity +
		')'
	)
}

export function getCommonOption(value, config) {
	return {
		grid: {
			top: 40,
			left: 40,
			bottom: 46,
			right: 0,
		},
		color: config.colorTheme.colorDisk,
		legend: {
			show: value.length > 1,
			icon: 'rect',
			orient: 'horizontal',
			align: 'left',
			itemWidth: 16,
			itemHeight: 8,
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
				interval: config.interval || 0,
				textStyle: {
					color: 'rgba(255, 255, 255, 1)',
					fontSize: 16,
					lineHeight: 16,
				},
			},
			data: value[0] && value[0].x,
		},
		yAxis: [
			{
				scale: config.scale,
				max: config.max || null,
				name: config.title,
				type: 'value',
				nameTextStyle: {
					padding: [0, 40, 0, 0],
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
			},
		],
		series: [],
	}
}
