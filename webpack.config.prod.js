const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

let extractMyStyles = new ExtractTextPlugin("myStyles.css");
let extractVendorStyles = new ExtractTextPlugin("vendorStyles.css");

module.exports = merge(common, {
    devtool: 'source-map',
    entry: {      
        //print: './src/js/print.js',
        //bulma: './src/js/bulma.js',
        //bulma_page: './src/js/bulma_page.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractVendorStyles.extract({
                    use: [
                        {
                            loader: "css-loader"             
                        },
                        {
                            loader: "sass-loader",
                            options: {
                            }
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css$/,
                use: extractMyStyles.extract({
                    use: [
                        {
                            loader: "css-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractVendorStyles,
        extractMyStyles,
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
             'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});