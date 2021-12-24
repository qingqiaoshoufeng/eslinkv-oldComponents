// import { getCommonOption } from '../../examples/utils'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (data, config) => {
	console.log(config)
	const dataMap = new dataAdapt(data.point, config.centerCompany)
	console.log(dataMap)
	const series = [
		{
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 15, //图标大小
				color: '#00DDFF',
			},
			lineStyle: {
				normal: {
					width: 1, //尾迹线条宽度
					opacity: 1, //尾迹线条透明度
					curveness: 0.1, //尾迹线条曲直度
					color: '#00DDFF',
					type: 'dashed',
				},
			},
			data: dataMap.linesData,
		},
		{
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				//涟漪特效
				period: 4, //动画时间，值越小速度越快
				brushType: 'stroke', //波纹绘制方式 stroke, fill
				scale: 8, //波纹圆环最大限制，值越大波纹越大
			},
			label: {
				show: false,
			},
			symbol: 'circle',
			symbolSize: function (val) {
				return 10 + val[2] * 2 //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#FFDC45',
				},
			},
			data: dataMap.endEffectScatter,
		},

		{
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				period: 4,
				brushType: 'stroke',
				scale: 12,
			},
			label: {
				show: false,
			},

			symbol: iconMap.companyCenter,
			symbolSize: function (val) {
				return 8 + val[2] * 2 //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#f00',
				},
			},

			data: dataMap.startEffectScatter,
		},
		{
			name: '门站',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			label: {
				show: false,
			},

			symbol: iconMap.gate_station,
			symbolSize: function (val) {
				return 32 //圆环大小
			},

			itemStyle: {
				normal: {
					show: false,
					color: '#f00',
				},
			},

			data: dataMap.gate_station,
		},
		{
			name: '加气站',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			label: {
				show: false,
			},

			symbol: iconMap.gas_station,
			symbolSize: function (val) {
				return 32 //圆环大小
			},

			itemStyle: {
				normal: {
					show: false,
					color: '#f00',
				},
			},

			data: dataMap.gas_station,
		},
		{
			name: '应急站',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			label: {
				show: false,
			},

			symbol: iconMap.emergence_station,
			symbolSize: function (val) {
				return 32 //圆环大小
			},

			itemStyle: {
				normal: {
					show: false,
					color: '#f00',
				},
			},

			data: dataMap.emergence_station,
		},
	]

	const option = {
		tooltip: {
			trigger: 'item',
			position: 'top',
			borderColor: '#00DDFF',
			showDelay: 0,
			hideDelay: 0,
			enterable: true,
			transitionDuration: 0,
			extraCssText: 'z-index:100',
			renderMode: 'html',
			backgroundColor: 'rgba(0, 26, 119, 0.8)',
			padding: [6, 14],
			borderWidth: 1,
			formatter: function (params, ticket, callback) {
				// debugger
				//根据业务自己拓展要显示的内容
				let res = ''
				const name = params.name
				const value = params.value[params.seriesIndex + 1]
				res = `<div class="chart_tooltip"> ${name} </div>`
				return res
			},
		},
		geo: {
			map: 'bj',
			zoom: 1.2,
			label: {
				emphasis: {
					show: false,
				},
			},
			roam: false, //是否允许缩放
			itemStyle: {
				normal: {
					color: 'rgba(51, 69, 89, 0)', //地图背景色
					borderColor: 'red', //省市边界线00fcff 516a89
					// borderWidth: 1,
				},
				emphasis: {
					color: 'rgba(37, 43, 61, 0)', //悬浮背景
				},
			},
		},
		series: series,
	}
	console.log(option, 'optionoption')
	// debugger
	return option
}

class dataAdapt {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public data: any[]
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	public dataMap: Record<string, any[]>
	public mapList: string[]
	public centerCompany: string
	constructor(data, centerCompany) {
		this.data = data
		this.dataMap = {}
		this.centerCompany = centerCompany
		this.mapList = [
			'company', //'公司',
			'gate_station', // '门站'
			'gas_station', // '加气站'
			'emergence_station', // '应急站'
			// 'surge_station', '高中压调压站',
			// 'service_outlets', '服务网点',
		]
		this.getDataMap()
	}
	getDataMap() {
		this.dataMap = this.data.reduce((current, item) => {
			if (this.mapList.includes(item.type)) {
				!current[item.type] && (current[item.type] = [])
				current[item.type].push(item)
			}
			return current
		}, {})
	}
	get linesData() {
		const { company: companyList } = this.dataMap
		if (companyList.length > 1) {
			const toList = []
			let from = {}
			companyList.forEach(item => {
				const { name, lon, lat } = item
				debugger
				if (item.name === '美能公司') {
					from = {
						coord: [lon, lat],
						name,
					}
				} else {
					toList.push({
						coord: [lon, lat],
						name,
					})
				}
			})
			return toList.map(item => {
				return [from, item]
			})
		} else {
			return []
		}
	}
	get startEffectScatter() {
		const { company: companyList } = this.dataMap
		// if (companyList.length > 1) {
		return companyList
			.filter(item => item.name === this.centerCompany)
			.map(item => {
				const { name, lon, lat } = item
				return {
					name,
					value: [lon, lat, ''],
				}
			})
		// }
		// else {
		// 	return []
		// }
	}
	get endEffectScatter() {
		const { company: companyList } = this.dataMap
		if (companyList.length > 1) {
			return companyList
				.filter(item => item.name !== this.centerCompany)
				.map(item => {
					const { name, lon, lat } = item
					return {
						value: [lon, lat, ''],
						name,
					}
				})
		} else {
			return []
		}
	}
	get gate_station() {
		return this.getScatter('gate_station')
	}
	get gas_station() {
		return this.getScatter('gas_station')
	}
	get emergence_station() {
		return this.getScatter('emergence_station')
	}
	getScatter(name: string) {
		debugger
		const scatterList = this.dataMap[name] || []
		if (scatterList.length > 0) {
			return scatterList.map(item => {
				const { name, lon, lat } = item
				return {
					value: [lon, lat, ''],
					name,
				}
			})
		} else {
			return []
		}
	}
}

const iconMap = {
	companyCenter:
		'image://data:image/png;base64,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',
	gate_station:
		'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOjSURBVHgBvVc9TBRBFP52URsx2YoEq1s0XEwwnpEEO0BKhUAnWEgBWN6pVFB4FFL5w5USErEROwxoqWCnyRExkBiIwhXmjFcRkcYE1/ft3N6esLu3y4FfMpfb2bfz3rx5P99oCIuPloGT6EYNWuUpISMmwyi+3ZKRk7EMC++wjZe4qG2FWVarKPHZiuEEkvKv31aYXQXWN4C1TVfm1EngdB3Q2AA0Nzmz0/iNMZzTcgczgDs2cA9/kEK+ADyfA+bfANs7CASNaW8BhvqUUcAEfoohPh7xNkDtekGUxfBkRik/CLquOIbkxBvtXt7Yb8C6lZBznsXaRgx3xoHvBVQFemFyXBmxix40asv+Bjg7p/Kh0cruDgsey+R9IN6wzxN6SchoM2zl+cLhKie4FtfkxqiD8VWE64FN6zG+FVIYHPF2O105PKh2UwlrkiUPprzXmMlwjQmc0W5z6pj9gq5ntDPg/M68Xj5ua0Eo+BnJbKKO4YGU6MzwKJQHvlpP5WU/rg2g4sK1ZYvf6AL6ZAyKe/M/3PlfO8FH+GqKG8rgrJbSxfU8j37bskrgovSQMxwlVO417wemtYabjAVdUqPbnlx8j0igNxxXh4mLcrCgsapKadfFkla7vEaN+r6i+4kXGUQCdWVXwL7CNEzYtf1/Y93uJQlmQcyOzqhY+AAsrbjPPIYoXlSbjtEAI/BDpl95ajKXx1LApSYPoySO0hnXECc2/Nc3dFTCa0mZzg73mXXdSznRfhm4W5bKjJGHowgCPcA2aQRKOQqdvh8EGrG0qv43mv5ytbX83aIBOcTNBOb9ZdHVoUYY0MixpPucXfWWUxvJ6UKhPgVaelSIN/B3WZcesIjm89GLSTWgLh6r8Ecdx4VAMg46Q7r4MMA4IYS86jCFq1l4VqpqXmBrvTqgRnYleHGWWUfWj8oN9fJ3mjxRpWGNEEcGhZcRc29VfjuNhnnuFVjMdSqksY4sC9XeHsNgpi5diCrKCckXa0LaaBLXk9XzQD84/LDYijnlFqIapCU4cng0cjQBafPCIjlt7kk70/+S0k2bGR0tKdWFlJpepJTgC12oMwXJ3errUDVst5eU95QrJ7wvJo4nyJDJlBSBiA4G9a1e2Ee7Z+fBBhBGt9wDZ9MikSyRSUZ0mKsZawqVc/cWMnZ8mVGuZuWgN3aRtjkcwUZD2p3fw/3ipiqvqnGp2sL0Ng96Od1viFHkj23y1QX4Xc935XrO6mqGu57/BQKuYAQ/LNMlAAAAAElFTkSuQmCC',
	gas_station:
		'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPVSURBVHgBtVc9TFNRGD19qINg+iYSHbQPDcREYo0kOmgAHVWETXEQE38Sl6pxUByoA8ZJ28mogzIIIwg4EjCaqAlGDCQGorQag6FTEVlM4Pmde/ug0L/bgie57evtfff7/+65Ppjik2ujHM0oQ738CsoIyLBT/yZlxGWMwcVrzKMPB3xJk219BVd8cQPYgpA8tSmBoxPA1DQwGVtZs60c2FEJVFcBdfu82ef4i7vY64uXpgAtttGBJVzDTALo7gcGhoD5BeQFlWk8BFxu1UoBEfwWRXJ4JLsC2uphERbA4x4tvBQ0HfMUiYs3GrN5I1OBKTcoce7F5HQAN+4BvxJYF+iFJ/e0EotoQbVvLLcCnuUUfvlOYXebgmF50gnUVGV4wlpeZDfYSvhMYmOFE9yLe9IwymB+pbDigZj7ED8T13CpPavbO26dRcOR2rxyrt9+irHxWO4FDEdPlB6JYLfv+ooC2vUxdER1pq9B84nD6H3RvmouObcA21++ao7CDxwNIS9am4CbFyGhcBgKHYItUm4stSzCCdu/NWOu8eQd3L3fs2ZdOQqCFUVZm6W8wRyIqXi0qXIzxPPuIQR2VqpveqJoUAkfzjMXLCmNZjU58t74fVoerHWk6yLDC0bQnlat3RJN6lV7Ncx6Wh3/kZAxizmxPvKoX/0uCpQ1Og6eK8yBoOrtBqC7PYvTk/DC1QiKxpSqluAm8FSbMbegrfX48nOwtkp979pZiaKhjQ5QAdvU/bSY/SAf2CuGBztVWFiSBZLUtlAkuPHI2wn1zM37Xn3Iuo5V4jcoSypgRBw8dEkSennAxtNyrhMloaKCn0mGII4aJ4gBs/fqj+xbtoylmJ4TRUFzBemELj6j2jF+j3kQSCUdQxAoJQGJGpXAY5YwnhHU1eoj0wAvJebRR9pdzIdwKY2Isg4KdRP+aElP7gPz4JSZK0+fOITzrcfUM0MQLlAVWdF4WH/PK9mCr24Eb2Zd+E9ljNj3WXc96Bt8l7kvZX1zn1G0LsMyIY5MCh6VGwy/v2L1RNNxnYCWEFWkExJ64c9CCGdC6+eBueDxw+2VUezxpY5jD2UIS3LE8aDdOCGLguKFKXJa1xL2pleT0pgwo6X/TEotIaVONlJK8A9LqDMXkrttL7HG06Hcviy8JV04kf1i4nmCDJlMKQdVKwgm9ZWzUKFdY3l+BQi7We6BvWFZEVLHNRUhazK5mrGnUDitdxFV+eUUczVLB72xiLDicMTHCfJ7TSzTlalxdHs9qC6nSRHcpcrbKfVymqmIneKPDfLWfuS6ni/K9Zzd1TG7nv8Didm4IGdz3DMAAAAASUVORK5CYII=',
	emergence_station:
		'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASMSURBVHgBtVdPcBNVGP/eJmkKNGFBOlKSOhsdnCkVjRyE8QDoTE9eqvTgdJwx5SK39AInmYaBm5fmyMXGg8WDjD3oBQ8WDw560KpjOoMzJEPSRqZAt22E/N3n99tmY0KyyRLKb2aT/fPe+33v+/8EOUQqMq56aPe4UMQpkhQmEhqRVLe/Cp3v0yRoSRryZpkeLYQSC7qTdUW3AbnIh1pVcUWFFBEQ3tIf0/JWgZL5Un2M3+Wi4C4XjQz004l9u6yVEyWjeimU+CrdkwDYsVfZMyMlTWcLZZq7u0HX/9mgzYpBneB3KzR2YICiL++nYL+HhKDZouFhQRK6YwGwa0O4fmAyLZ56QHMZR9pswZmDfkuQdElW32mnjRYBspHJsBDim2S+qJ37I0fY/bMAWpg/FjCFkFK+H0zML9kKYO0c5JO/Zruq2ylglvk3g3TE523RhGLdqFpYBTnveEfJAaw1+VuWkltFrY85UpGI2iJA8t3RmW3ylR0lbxTi3J85/GtepTzTJABUD2+P33no2OZTw/to6eQr5hUNveBoDtaO33lA4EoxZ10AQ3Fh9xxmm10XOc5xfu1YkC4ePmDaFlc0tJ9+fFujscGBrvPnsropiJuUaTwL2KNPlNfPJ+91FMDHRNO806lhtSPB17lNiqce0koHTWKNi4cH9ZL0hBQPlcbx8sb9vO2EscE99N1bL3UlByaG/KyhAJ3hfztcz5kbVcGtILf/vP6YtmwcD/a9evSQGc9OgbGfjbxo+kk7wCFvMSfngFMKCstf+YLtYrBvr+g0dxmcQoThhNpKoULPA3BQO9SKmYYR6vOIe4dQFacjP8+sNyUo3KNQWeD0Td+v/WveI8wu375P55fvdV0XAjgqdYkMSnG1QYCqGW6Xb6+Zz8tbRTOSQP4JF7EA9wcTB+0joWYe3c0/6ZGBvjD1AHg7GhR4tAVEFBcdOmsTAf/PBTWlFSmN30e5k+kVV18foit/r9FGTTvQQG1xulLTTjuge+IIXGI9iEWkV5/bsTs0AVr4gJPOHJsIOKHuRtUz7z99dbDtHKgfrZskeVMpU98Cv9MnOmQuC7A3HAtXY+I6yxnS2jU243e72A9Wm5y0EVbNALfZkGQik7OrxUr05E/plsHfcgo+MuA1bduIEbYz1I1vgFVFrYyJ8Rl+d6FNJKBwBb2eRCDx5ZSpdzcZs5jYLnVe4CKFxbGzxgtqtMgt4sZ07fMoHDmtAYYagXElql7Cc70ly0Q+ms1Xq9H3frnbsZI9CwJMjEJ1yOuODyfmzXJc97wKuWO8qzS8uleH7ASsea3WnB5dXI1Z7+tM6NsVbhhZrWk0HDspxDZ5sN6e6+lFvUUAYIi7VbTOEAL1P/AUJdgO22oPwl/MtZ88G3Q8mKBJRbqtNRBPDTg1SjJM6/hgUge36ZnTr8UUIaNmM8mC3FjL2zYuFqDuiaG9TL7X9HZDyniFHsXsDqvODqfkivEZ72M8I77RwKwUqk3FiesJjfr66biKw6nQDWl8UeHw7vlw+iSs4zlPOc2z3hAktMbjOafVtOjheP4fIA4oH+lj6YwAAAAASUVORK5CYII=',
}
