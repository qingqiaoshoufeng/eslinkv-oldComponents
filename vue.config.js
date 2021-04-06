const path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
const needReport = false

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	pages: {
		index: {
			entry: 'examples/main.ts',
			template: 'public/index.html',
			filename: 'index.html',
		},
	},
	transpileDependencies: [
		'@simonwep',
		'vue-draggable-resizable-gorkys2',
		'swiper',
		'dom7',
	],
	assetsDir: 'static',
	productionSourceMap: false,
	lintOnSave: true,
	devServer: {
		port: 3000,
		hot: true,
		open: true,
		disableHostCheck: true,
		proxy: {
			'^/node': {
				// target: 'http://127.0.0.1:7001',
				target: 'http://eslinkv.eslink.cc',
				changeOrigin: true,
				// pathRewrite: {
				// 	'^/node': '/'
				// }
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
				// 'eslinkv-sdk': 'eslinkV',
				'vue-router': 'VueRouter',
				echarts: 'echarts',
				'vue-class-component': 'VueClassComponent',
			},
		]
	},
	chainWebpack: config => {
		// 扩展 webpack 配置，使 packages 加入编译
		config.module
			.rule('svg')
			.exclude.add(resolve('node_modules/eslinkv-sdk/src/icons'))
			.end()
		config.module
			.rule('icons')
			.test(/\.svg$/)
			.include.add(resolve('node_modules/eslinkv-sdk/src/icons'))
			.end()
			.use('svg-sprite-loader')
			.loader('svg-sprite-loader')
			.options({
				symbolId: 'icon-[name]',
			})
			.end()
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
		config.resolve.alias.set('@lib', path.resolve(__dirname, './lib'))
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
