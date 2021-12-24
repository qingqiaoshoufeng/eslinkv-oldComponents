const isProduction = process.env.NODE_ENV === 'production'
const needReport = false

module.exports = {
	pages: {
		index: {
			entry: 'examples/main.ts',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	transpileDependencies: ['@simonwep', 'swiper', 'dom7'],
	assetsDir: 'static',
	productionSourceMap: false,
	lintOnSave: 'warning',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		disableHostCheck: true,
		proxy: {
			// '^/node': {
			// 	// target: 'http://127.0.0.1:7001',
			// 	target: 'http://eslinkv.eslink.cc',
			// 	changeOrigin: true,
			// 	// pathRewrite: {
			// 	// 	'^/node': '/'
			// 	// }
			// }, ceshi
			'^/ceshi': {
				target: 'https://kv-etbc.eslink.com',
				changeOrigin: true,
				headers: {
					Cookie: 'EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; OUTFOX_SEARCH_USER_ID_NCOO=1918531703.0243301; SESSION=d18ba357-8436-424a-96cd-cc2522faf212',
				},
			},
			'^/meineng': {
				target: 'http://119.3.142.120:8083',
				changeOrigin: true,
				headers: {
					// Cookie: 'UM_distinctid=179cbd18f652b6-0fd6d652023f73-2363163-1fa400-179cbd18f66cb1; EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; SESSION=f1bdcfaf-1b8a-44f3-8bb7-2e05e91fb5ca',
				},
				pathRewrite: {
					'^/meineng': '',
				},
			},
			'^/node': {
				target: 'https://kv-etbc.eslink.com',
				changeOrigin: true,
				headers: {
					Cookie: 'UM_distinctid=179cbd18f652b6-0fd6d652023f73-2363163-1fa400-179cbd18f66cb1; EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; SESSION=ff6f6ef0-0cd2-4fa2-a678-c9a59708728e',
				},
			},
			'/huachen': {
				target: 'https://kv-etbc.eslink.com',
				changeOrigin: true,
				headers: {
					Cookie: 'EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; JSESSIONID=488CA7BA32227724E8967D7C33C7A5D4; SESSION=b4d555fd-c62d-47da-9e16-86bad36871ab',
				},
			},
			'^/cdn': {
				target: 'http://eslinkv.eslink.cc',
				changeOrigin: true,
			},
			'^/yapi': {
				target: 'http://yapi.eslink.com',
				changeOrigin: true,
				pathRewrite: {
					'^/yapi': '',
				},
			},
			// /editor/manger/5f2565ee-cadd-49ff-a658-3c665ce8d373
			// '^/editor/manger': {
			// 	target: 'https://kv-etbc.eslink.com',
			// 	changeOrigin: true,
			// 	headers: {
			// 		Cookie: 'UM_distinctid=179cbd18f652b6-0fd6d652023f73-2363163-1fa400-179cbd18f66cb1; EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; SESSION=ff6f6ef0-0cd2-4fa2-a678-c9a59708728e',
			// 	},
			// },
		},
	},
	css: {
		extract: false,
		sourceMap: false,
	},
	configureWebpack: config => {
		config.resolve.extensions = ['.js', '.vue', '.json', '.ts', '.tsx']
		config.externals = [
			{
				vue: 'Vue',
				'vue-router': 'VueRouter',
				echarts: 'echarts',
				'vue-class-component': 'VueClassComponent',
			},
		]
	},
	chainWebpack: config => {
		config.module
			.rule('js')
			.include.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})
		config.optimization.splitChunks({ cacheGroups: {} })
		if (isProduction) {
			if (needReport) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(
						require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
					)
					.end()
			}
			config.plugins.delete('prefetch')
		} else {
			config.resolve.symlinks(true)
		}
	},
}
