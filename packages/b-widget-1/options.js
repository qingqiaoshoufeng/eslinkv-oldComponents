import { hexToRgba } from '../../examples/utils'

export default function (percent, config) {
	const max = 100

	return {
		title: {
			text: percent + '%',
			x: 'center',
			y: '25%',
			textStyle: {
				color: config.titleColor,
				fontSize: '64',
				fontFamily: 'font-num',
			},
			subtextStyle: {
				color: config.subTitleColor,
				fontSize: 32,
			},
			subtext: config.title5,
		},
		grid: {
			left: 0,
			right: 0,
		},
		polar: {
			// 圆弧大小
			radius: '210%',
			center: ['50%', '95%'],
		},
		angleAxis: {
			axisLine: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			splitLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			min: 0,
			max: 2 * max,
			boundaryGap: ['0', '100'],
			startAngle: 180,
		},
		radiusAxis: {
			type: 'category',
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			axisLabel: {
				show: false,
			},
			data: ['a', 'b', 'c'],
			z: 10,
		},
		series: [
			{
				type: 'bar',
				data: [, , percent || 0],
				coordinateSystem: 'polar',
				barMaxWidth: 15,
				z: 2,
				roundCap: 1,
				color: config.mainColor,
				barGap: '-100%',
			},
			{
				type: 'bar',
				data: [, , max],
				z: 0,
				silent: true,
				coordinateSystem: 'polar',
				barMaxWidth: 15,
				name: 'C',
				roundCap: 1,
				color: config.bgColor,
				barGap: '-100%',
			},
			{
				type: 'pie',
				radius: ['170%', '180%'],
				center: ['50%', '97%'],
				hoverAnimation: false,
				startAngle: 180,
				endAngle: 0,
				data: [
					{
						name: '',
						value: percent,
						label: {
							show: false,
						},
						labelLine: {
							show: false,
						},
						itemStyle: {
							color: 'rgba(1,0,0,0)',
						},
					},
					{
						// 画中间的图标
						name: '',
						value: 0,
						label: {
							position: 'inside',
							backgroundColor: config.pointerColor,
							borderRadius: 15,
							padding: 15,
							borderWidth: 4,
							borderColor: hexToRgba(config.pointerColor, 0.5),
						},
					},
					{
						name: '',
						value: max - percent,
						label: {
							show: false,
						},
						labelLine: {
							show: false,
						},
						itemStyle: {
							color: 'rgba(255,255,255,0)',
						},
					},
					{
						name: '',
						value: max,
						label: {
							show: false,
						},
						labelLine: {
							show: false,
						},
						itemStyle: {
							color: 'rgba(255,255,255,0)',
						},
					},
				],
			},
		],
	}
}
