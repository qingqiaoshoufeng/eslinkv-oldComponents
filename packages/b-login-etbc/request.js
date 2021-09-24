import axios from 'axios'

const request = axios.create()

request.defaults.timeout = 30000
request.interceptors.request.use(
	function (config) {
		return config
	},
	function (error) {
		return Promise.reject(error)
	},
)

/**
 * @description
 * {
 *   result: '数据',
 *   responseCode: 0,
 *   message：'错误信息'
 * }
 */
const errMessage = '网络异常，请重试'
request.interceptors.response.use(
	response => {
		const { data } = response
		// console.log(data)
		return data
	},
	function (e) {
		console.error(errMessage)
		return Promise.reject(false)
	},
)

export default request
