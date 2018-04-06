const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: {
        //print: './src/js/print.js',
        //bulma: './src/js/bulma.js',
        //bulma_page: './src/js/bulma_page.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            },
            {
                loader: "css-loader" 
            },
            {
                loader: "sass-loader",
                options: {
                }
            }]
        }]
    }
});