var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// whether to generate source map for production files.
// disabling this can speed up the build.
const hashLen = 8;
var config = merge(baseConfig, {
    devtool: false,
    output: {
        filename: 'static/[name].js?md5=[chunkhash:' + hashLen + ']',
        chunkFilename: 'static/[id].js?md5=[chunkhash:' + hashLen + ']'
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
                        "less-loader"
                    ]
                })
            }
        ]
    },
    plugins: [
        // http://vuejs.github.io/vue-loader/workflow/production.html
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: `static/vendors.js?md5=[chunkhash:${hashLen}]`
        }),

        new ExtractTextPlugin('static/[name].css?md5=[contenthash:' + hashLen + ']'), //单独使用link标签加载css并设置路径，相对于output配置中的publickPath
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: './index.html', //生成的html存放路径，相对于publicPath
            template: 'docs/index.html', //html模板路径
            inject: true,
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        })
        // extract css into its own file
        // generate dist index.html with correct asset hash for caching.
        // you can customize output by editing /index.html
        // see https://github.com/ampedandwired/html-webpack-plugin
    ]
});

module.exports = config;
