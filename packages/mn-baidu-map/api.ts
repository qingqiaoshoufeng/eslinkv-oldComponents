const API = '/huachen'
const api = '/meineng'
// const parmasString = '?companyId=004901'
const parmasString = ''
const ajax = (url: string) => {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest()
		xhr.open('get', url, true)
		xhr.setRequestHeader(
			'content-Type',
			'application/x-www-form-urlencoded',
		)
		xhr.send()
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4 && xhr.status === 200) {
				let data
				data = JSON.parse(xhr.responseText)
				resolve(data)
			}
		}
	})
}

// 地图图例，包含所有图例和当前客户图例，客户图例的visible默认为true
// export function mapLegend(data) {
// 	const url = `${API}/gis/legend?mapName=${data}`
// 	return ajax(url)
// }
// 地图管线信息
// export function mapLineResult(data) {
// 	const url = `${API}/gis/mapLineResult?type=${data}`
// 	return ajax(url)
// }

// 地图点位信息
// export function mapPointResult() {
// 	const url = `${API}/gis/mapPointResult`
// 	return ajax(url)
// }

// 压力远传采集点位（压力监测点）
// export function pressureCollectList() {
// 	const url = `${API}/patrol/pressureCollectList`
// 	return ajax(url)
// }

// 压力远传采集点位明细
// export function pressureCollectDetail(data) {
// 	const url = `${API}/patrol/pressureCollectDetail?gatewayDeviceNo=${data}`
// 	return ajax(url)
// }

// export function stationPointsDetail(data) {
// 	const url = `${API}/gis/mapPointDetail?type=${data[0]}&stationId=${data[1]}`
// 	return ajax(url)
// }

// export function mapStationArea() {
// 	const url = `${API}/gis/mapStationArea`
// 	return ajax(url)
// }

export function getAllapPonit() {
	// http://119.3.142.120:8083/home/map?
	const url = `${api}/home/bdMap${parmasString}`
	return ajax(url)
}
// /home/bdMap?companyId=0049
export function getAllMapArea() {
	// http://119.3.142.120:8083/home/map?
	const url = `${api}/home/bdMapArea${parmasString}`
	return ajax(url)
}

export function getAllInfo() {
	debugger
	return Promise.all([
		getAllapPonit(),
		// getAllMapArea()
	])
}
