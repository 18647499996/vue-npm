const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({

    /**
     * todo publicPath
     * 项目打包时，打包出来的文件根目录，如果我们设置成“/”则我们打包后默认都是在dist目录下,假设我们设置成"/app"，
     * 我们所打包的dist目录下会生成一个app目录，打包后的资源文件都是在app目录下的，这是所有的静态资源都会找不到，所以我们一般都是设置成“/”的。
     */

    publicPath: '/',
    /**
     * todo outputDir
     * 项目打包时输出的文件目录，比如说设置成“dist”，那么我们打包后的目录名称就是“dist”，我们设置成“build”，打包后的目录名称就是“build”。
     */
    outputDir: 'dist',

    /**
     * todo assetsDir
     * 我们放置静态资源的目录，项目刚创建时，默认都是asset，所以一般我们不会动，直接配置 assetDir:"assets".
     * 当然，如果你不太习惯，也可以换成你想要的名字，只需要把目录名和这个名字时对应的,比如说你习惯用static，
     * 目录名称是static，那么这里就可以写成 assetsDir:"static"。
     */
    assetsDir: 'assets',

    css: {}
})