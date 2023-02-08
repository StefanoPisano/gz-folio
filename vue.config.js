const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/'
}

module.exports = {
	configureWebpack: {
		module: {
			rules: [{
				test: /\.md$/,
				loader: 'raw-loader', // npm install -D raw-loader
			}]
		}
	}
}