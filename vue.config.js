// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave:false
// })

const release = require('./builder/webpack.release')
const dev = require('./builder/webpack.dev')
const base = require('./builder/webpack.base')
const test = require('./builder/webpack.test')

const config = process.env.VUE_APP_ENV === 'production' ? release : process.env.VUE_APP_ENV === 'development' ? dev : test

/**
 * todo 合并执行vue.config.js 配置文件
 *      webpack.base    公共配置文件
 *      webpack.release 生产环境相关配置
 *      webpack.dev     开发环境相关配置
 *      webpack.test    测试环境相关配置
 */
module.exports = Object.assign(base, config)