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
			// },
			'^/node': {
				target: 'https://kv-etbc.eslink.com',
				changeOrigin: true,
			},
			'/huachen': {
				target: 'https://kv-etbc.eslink.com',
				changeOrigin: true,
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
