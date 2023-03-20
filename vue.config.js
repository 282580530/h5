let baseUrl = "http://10.6.145.17:" //UAT2

// vue.config.js
module.exports = {
	// 选项...
	productionSourceMap: false,  // 生产环境禁用jsmap
	transpileDependencies: true,
	lintOnSave: false,
	// 将部署应用程序的基本URL
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	// outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
	//outputDir: 'www', 
	configureWebpack: {
		optimization: {
			nodeEnv: false
		}
	},
	
	devServer: {
		port: 8008, // 端口号
		host: '0.0.0.0',
		https: false, // https:{type:Boolean}
		open: false, //配置自动启动浏览器
		// proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
		proxy: {
			'/op-service-message-new': {
				target: `${baseUrl}10017`, // target host
				pathRewrite: {
					"^/op-service-message-new": "/op-service-message-new",     // rewrite path
				},
			},  // 配置多个代理
		}
	},
	css: {
		loaderOptions: {
			postcss: {
				postcssOptions: {
					plugins: [
						require('postcss-pxtorem')({ // 把px单位换算成rem单位
							rootValue: 37.5, // vant官方使用的是37.5
							selectorBlackList: ['vant', 'mu'], // 忽略转换正则匹配项
							propList: ['*']
						})
					]
				}
			}
		}
	}

}