const request = (url: string) => {
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

export default request
