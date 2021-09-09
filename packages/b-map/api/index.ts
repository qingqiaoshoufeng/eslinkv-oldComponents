const API = '/huaxin'

let ajax = (url: string) => {
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest()
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

export function mapLineResult(data) {
	const url = `${API}/gis/mapLineResult?type=${data}`
	return ajax(url)
}

export function mapPointResult() {
	const url = `${API}/gis/mapPointResult`
	return ajax(url)
}

export function stationPointsDetail(data) {
	const url = `${API}/gis/mapPointDetail?type=${data[0]}&stationId=${data[1]}`
	return ajax(url)
}

export function mapStationArea() {
	const url = `${API}/gis/mapStationArea`
	return ajax(url)
}
