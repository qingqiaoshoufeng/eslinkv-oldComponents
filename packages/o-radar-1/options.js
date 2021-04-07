
export default (data, config) => {
	return {
		color: config.colorTheme.colorDisk,
		radar: {
			grid: {
				left: '5%',
				top: '5%',
				right: '5%',
				bottom: '5%',
			},
			splitNumber: 4,
			backgroundColor: 'rgba(255,255,255,1)',
			name: {
				textStyle: {
					color: '#fff',
				},
			},
			splitArea: {
				areaStyle: {
					color: ['rgba(0,96,208, 0.1)', 'rgba(0,96,208, 0.2)',
						'rgba(0,96,208, 0.4)', 'rgba(0,96,208, 0.6)',
						'rgba(0,96,208, 0.8)', 'rgba(0,96,208, 1)'].reverse(),
				},
				lineStyle: {
					color: '#fff',
				},
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#0E7AC3',
					width: 2,
				},
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#0E7AC3',
					width: 2,
				},
			},
			indicator: data.value.map(item => {
				return { name: item.name, max: 1 }
			}),
		},
		series: {
			type: 'radar',
			lineStyle: {
				normal: {
					color: '#000',
					width: 0,
				},
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: 'rgba(0,221,255,0.6)',
						},
						{
							offset: 1,
							color: 'rgba(0,255,207,0.6)',
						},
					]),
				},
			},
			data: [
				{
					value: data.value.map(item => item.percent),
					symbolSize: 0,
				},
			],
		},
	}
}
