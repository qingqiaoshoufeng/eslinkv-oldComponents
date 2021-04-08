
export default (data, config) => {
	const value = data.value || []
	const total = value.reduce((p, n) => {
		return (Number(p) || 0) + Number(n.value)
	})
	const option = {
		title: {
			text: config.title1,
			subtext: config.title2,
			left: 'center',
			top: config.title2 ? '46%' : '47%',
			textStyle: {
				color: '#fff',
				fontSize: 24,
				fontWeight: 600,
			},
			subtextStyle: {
				color: '#fff',
				fontSize: 24,
				fontWeight: 600,
			},
		},
		color: config.colorTheme.colorDisk,
		series: [
			{
				type: 'pie',
				center: ['50%', '50%'],
				radius: ['52%', '64%'],
				avoidLabelOverlap: false,
				minAngle: 24,
				startAngle: config.startAngle,
				label: {
					formatter: function (params) {
						const percent = (
							(params.value * 100) /
							total
						).toFixed(2)
						return `{normal|${
							params.name
						}} \n {value|${Math.ceil(
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
					length: 25,
					length2: 110,
				},
				data: value,
			},
		]
	}

	return option
}
