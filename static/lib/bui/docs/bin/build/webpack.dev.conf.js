var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var project = require('../../config/project');
var theme = require('../../../bin/build/theme');

var config = merge(baseConfig, {
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    module: {
        rules: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
            {
                test: /\.css/,
                loader: 'vue-style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions'
            },
            {
                test: /\.less$/,
                loader: 'vue-style-loader!css-loader?sourceMap!autoprefixer-loader?browsers=last 2 versions!less-loader?{"modifyVars":' +JSON.stringify(theme.getModifyVars(project.theme))+ '}'
            },
        ]
    },
    plugins: [
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        // new ExtractTextPlugin('static/[name].css'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
            filename: './index.html', //生成的html存放路径，相对于publicPath
            template: 'docs/index.html', //html模板路径
            inject: true
        })
    ],
    devServer: {
        contentBase: './', // 相对于publicPath
        host: project.devServer.host || 'local.beibei.com',
        port: project.devServer.port || 9000,
        inline: true,
        historyApiFallback: true,
        hot: true,
        noInfo: true,
        watchOptions:{
          aggregateTimeout: 300,
          poll: 1000
        }
    }
});

module.exports = config;
