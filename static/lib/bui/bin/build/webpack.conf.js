var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var theme = require('./theme');

module.exports = function (themeValue) {

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve('./build'), //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
      filename: 'index.js',
      chunkFilename: '[id].js',
      library: 'Bui',
      libraryTarget: 'umd'
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    },
    resolve: {
      modules: [
        path.resolve('./'),
        "node_modules"
      ],
      extensions: ['.js', '.vue']
    },
    module: {
      rules: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
        {
          test: /\.css/,
          use: ExtractTextPlugin.extract({
            use: [
              "css-loader",
              "autoprefixer-loader?browsers=last 2 versions"
            ]
          })
        },
        {
          test: /\.less$/,
          use: ExtractTextPlugin.extract({
            use: [
              "css-loader?minimize",
              "autoprefixer-loader?browsers=last 2 versions",
              'less-loader?{"modifyVars":' + JSON.stringify(theme.getModifyVars(themeValue)) + '}'
            ]
          })
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: '[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            name: '[name].[hash:7].[ext]'
          }
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new ExtractTextPlugin(themeValue ? 'index-' + themeValue + '.css' : 'index.css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
};
