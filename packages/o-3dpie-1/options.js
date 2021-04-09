export default function (data, config) {
	const arr = JSON.parse(JSON.stringify(data.value))
	arr.forEach((v, i) => {
		if (i === 0) {
			v.h = 40
		} else {
			v.h = 10
		}
	})
	return {
		credits: { enabled: false },
		chart: {
			type: 'pie',
			options3d: {
				enabled: true,
				alpha: 60,
			},
			backgroundColor: 'transparent',
			events: {
				load: function () {
					var each = Highcharts.each,
						points = this.series[0].points
					each(points, function (p, i) {
						p.graphic.attr({
							translateY: -p.shapeArgs.ran,
						})
						p.graphic.side1.attr({
							translateY: -p.shapeArgs.ran,
						})
						p.graphic.side2.attr({
							translateY: -p.shapeArgs.ran,
						})
					})
				},
				redraw: function () {
					var each = Highcharts.each,
						points = this.series[0].points
					each(points, function (p, i) {
						p.graphic.attr({
							translateY: -p.shapeArgs.ran,
						})
						p.graphic.side1.attr({
							translateY: -p.shapeArgs.ran,
						})
						p.graphic.side2.attr({
							translateY: -p.shapeArgs.ran,
						})
					})
				},
			},
		},
		colors: config.colorTheme.colorDisk,
		title: {
			text: arr[0].y + '%',
			verticalAlign: 'middle',
			style: {
				color: '#fff',
				'font-size': '32px',
				'font-family': 'font-num',
			},
		},
		subtitle: {
			text: arr[0].name,
			verticalAlign: 'middle',
			y: 30,
			style: { color: '#fff', 'font-size': '18px' },
		},
		plotOptions: {
			pie: {
				size: '100%',
				innerSize: '60%',
				depth: 12,
			},
		},
		series: [
			{
				type: 'pie',
				name: config.title,
				dataLabels: { enabled: false },
				data: arr,
			},
		],
	}
}
