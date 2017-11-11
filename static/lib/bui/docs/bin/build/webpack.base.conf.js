var webpack = require('webpack');
var path = require('path');
var md = require('markdown-it')();
var fs = require('fs');
var project = require('../../config/project');
var striptags = require('./strip-tags');
var slugify = require('transliteration').slugify;

function convert(str) {
    str = str.replace(/(&#x)(\w{4});/gi, function ($0) {
        return String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16));
    });
    return str;
}

const publicPath = project.prefix || "";

var markdown = require('markdown-it')({
    html: true,
    breaks: true
});

var num = 0;

markdown.use = [
    [require('markdown-it-anchor'), {
        level: 2,
        slugify: slugify
    }],
    // 包裹内容
    [require('markdown-it-container'), 'demo', {

        validate: function (params) {
            return params.trim().match(/^demo\s*(.*)$/);
        },

        render: function (tokens, idx) {
            var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            if (tokens[idx].nesting === 1) {
                var description = (m && m.length > 1) ? m[1] : '';
                var content = tokens[idx + 1].content;
                var html = convert(striptags.strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1');
                var descriptionHTML = description
                    ? md.render(description)
                    : '';
                var code = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return `<demo-block class="demo-box">
                    <template slot="code"><div v-pre>${code}</div></template>
                    <div class="source" slot="source">${html}</div>
                    ${descriptionHTML}
                    <template slot="highlight">`;
            }
            return '</template></demo-block>\n';
        }
    }]
];

markdown.preprocess = function (MarkdownIt, source) {
    MarkdownIt.renderer.rules.table_open = function () {
        return '<table class="markdown-table">';
    };
    MarkdownIt.renderer.rules.fence = wrap(MarkdownIt.renderer.rules.fence);
    return source;
};

var wrap = function (render) {
    return function () {
        return render.apply(this, arguments)
            .replace('<code class="', '<code class="hljs ')
            .replace('<code>', '<code class="hljs">');
    };
};

module.exports = {
    entry: "docs/index.js",
    output: {
        path: path.resolve('./') + '/docs/build', //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: publicPath,	//模板、样式、脚本、图片等资源对应的server上的路径
        filename: 'static/[name].js',
        chunkFilename: 'static/[id].js'
    },
    resolve: {
        modules: [
            path.resolve('./'),
            "node_modules"
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
        extensions: ['.js', '.vue', '.less']
    },
    module: {
        rules: [ //加载器，关于各个加载器的参数配置，可自行搜索之。
            {
                test: /\.md/,
                loader: 'vue-markdown-loader'
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
        //new webpack.ProvidePlugin({ //加载jq
        //    $: 'jquery'
        //}),
        new webpack.LoaderOptionsPlugin({
            test: /\.md/,
            options: {
                vueMarkdown: markdown
            }
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
            }
        }),
    ]
};
