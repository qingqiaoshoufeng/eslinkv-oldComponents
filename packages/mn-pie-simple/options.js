export default (data, config) => {
	const value = data.value || []
	let total = 0
	if (value.length) {
		total = value.reduce((p, n, index) => {
			return (Number(p) || 0) + Number(n.value)
		}, 0)
	}
	const option = {
		title: {
			text: config.title1,
			subtext: config.title2,
			left: 'center',
			top: config.top + '%',
			textStyle: {
				color: '#fff',
				fontSize: config.fontSize,
				fontWeight: 600,
			},
			subtextStyle: {
				color: '#fff',
				fontSize: config.fontSize,
				fontWeight: 600,
			},
		},
		color: config.colorTheme.colorDisk,
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: [
					`${config.radius.split(',')[0]}%`,
					`${config.radius.split(',')[1]}%`,
				],
				avoidLabelOverlap: false,
				minAngle: 24,
				startAngle: config.startAngle,
				label: {
					formatter: function (params) {
						const percent = ((params.value * 100) / total).toFixed(
							2,
						)
						return `{normal|${params.name}} \n {value|${Math.ceil(
							params.value,
						).toLocaleString()} ${percent}%}`
					},
					padding: [0, -100],
					rich: {
						normal: {
							fontSize: 14,
							lineHeight: 14,
							color: '#fff',
							padding: [6, 0, 0, 0],
							align: 'right',
						},
						value: {
							align: 'left',
							fontSize: 14,
							lineHeight: 14,
							color: '#fff',
							padding: [-8, 0, 0, 0],
						},
					},
				},
				labelLine: {
					length: config.labelLine.split(',')[0],
					length2: config.labelLine.split(',')[1],
					width: config.labelLine.split(',')[2],
				},
				data: value,
			},
		],
		grid: {
			left: 10,
			top: 10,
			right: 10,
			bottom: 10,
		},
	}

	return option
}
