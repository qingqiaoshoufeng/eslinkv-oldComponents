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
	lintOnSave: true,
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
					Cookie: 'UM_distinctid=179cbd18f652b6-0fd6d652023f73-2363163-1fa400-179cbd18f66cb1; EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; SESSION=f1bdcfaf-1b8a-44f3-8bb7-2e05e91fb5ca',
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
					Cookie: 'EslinkV=JqwfpIPeFqQtKMsacKd7SqxNWMYsTs9ncSOb175MAhKDC44D3dxhiYD4X1i4-4TB; SESSION=ce6fae46-ceae-4446-9fc6-18331b9897d3',
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
