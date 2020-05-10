const vueLoaderPlugin = require('vue-loader/lib/plugin.js')//vueLoader插件
const webpack = require('webpack')//版权插件
const htmlWebpackPlugin = require('html-webpack-plugin')//自动生成index.html,
const uglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')//压缩js


module.exports = {
  entry:'./01基本使用/src/main.js',
  output:{
    path:__dirname+'/01基本使用/dist',
    filename:'main.js',
  },
  plugins:[
    new vueLoaderPlugin(),
    new webpack.BannerPlugin('最终版权归脚下所有'),
    new htmlWebpackPlugin({
      template:'01基本使用/index.html'
    }),
    new uglifyjsWebpackPlugin()
  ],
  module:{
    rules:[
      { 
        test:/\.css$/,
        use:[
          {
            loader:"style-loader"
          },
          {
            loader:"css-loader"
          }
        ]
      },
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(jpg|png|jpeg|gif)$/,
        use:{
          loader:'url-loader',
          options:{
            limit:8000,
            name:'img/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test:/\.js$/,
        exclude:/node_modules/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['es2015']
          }
        }
      },
      {
        test:/\.vue$/,
        use:{
          loader:'vue-loader'
        }
      },
    ]
  },
  resolve:{
    alias:{
      'vue$':'vue/dist/vue.esm.js'
    }
  },
  devServer:{
    contentBase:'./01基本使用/dist',
    // inline:true
  }
}