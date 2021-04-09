import { loadJs } from '../../examples/utils'

export default async function (id, data, config) {
	await loadJs('/cdn/highcharts/highcharts-9.0.1.js', 'Highcharts')
	await loadJs('/cdn/highcharts/highcharts-3d-9.0.1.js', 'Highcharts1')
	await loadJs('/cdn/highcharts/exporting-9.0.1.js', 'Highcharts1')
	await loadJs('/cdn/highcharts/highcharts-zh_CN.js', 'Highcharts3')
	if (!data) return
	let each = Highcharts.each
	let round = Math.round
	let cos = Math.cos
	let sin = Math.sin
	let deg2rad = Math.deg2rad
	Highcharts.wrap(
		Highcharts.seriesTypes.pie.prototype,
		'translate',
		function (proceed) {
			proceed.apply(this, [].slice.call(arguments, 1))
			// Do not do this if the chart is not 3D
			if (!this.chart.is3d()) {
				return
			}
			var series = this,
				chart = series.chart,
				options = chart.options,
				seriesOptions = series.options,
				depth = seriesOptions.depth || 0,
				options3d = options.chart.options3d,
				alpha = options3d.alpha,
				beta = options3d.beta,
				z = seriesOptions.stacking
					? (seriesOptions.stack || 0) * depth
					: series._i * depth
			z += depth / 2
			if (seriesOptions.grouping !== false) {
				z = 0
			}
			each(series.data, function (point) {
				var shapeArgs = point.shapeArgs,
					angle
				point.shapeType = 'arc3d'
				var ran = point.options.h
				shapeArgs.z = z
				shapeArgs.depth = depth * 0.75 + ran
				shapeArgs.alpha = alpha
				shapeArgs.beta = beta
				shapeArgs.center = series.center
				shapeArgs.ran = ran
				angle = (shapeArgs.end + shapeArgs.start) / 2
				point.slicedTranslation = {
					translateX: round(
						cos(angle) *
							seriesOptions.slicedOffset *
							cos(alpha * deg2rad),
					),
					translateY: round(
						sin(angle) *
							seriesOptions.slicedOffset *
							cos(alpha * deg2rad),
					),
				}
			})
		},
	)
	;(function (H) {
		H.wrap(
			Highcharts.SVGRenderer.prototype,
			'arc3dPath',
			function (proceed) {
				// Run original proceed method
				var ret = proceed.apply(this, [].slice.call(arguments, 1))
				ret.zTop = (ret.zOut + 0.5) / 100
				return ret
			},
		)
	})(Highcharts)

	const arr = JSON.parse(JSON.stringify(data.value))
	arr.forEach((v, i) => {
		if (i === 0) {
			v.h = 40
		} else {
			v.h = 10
		}
	})
	const chart = Highcharts.chart(id, {
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
				id: 'test',
				type: 'pie',
				name: config.title,
				dataLabels: { enabled: false },
				data: arr,
			},
		],
	})

	setInterval(() => {
		let next
		let seriesData = chart.options.series[0].data
		let index = seriesData.findIndex(v => v.h === 40)
		seriesData[index].h = 10
		if (index === seriesData.length - 1) {
			seriesData[0].h = 40
			next = seriesData[0]
		} else {
			seriesData[index + 1].h = 40
			next = seriesData[index + 1]
		}
		// chart.get('test').setData(seriesData, true, false);
		chart.update({
			title: { text: next.y + '%' },
			subtitle: { text: next.name },
			series: seriesData,
		})
	}, 2000)
}
