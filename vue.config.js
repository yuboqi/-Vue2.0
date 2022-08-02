const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //打包时不生成map文件
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn',
        // pathRewrite: { '^/api': '' },
      },
    },
  },
})
