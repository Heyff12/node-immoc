const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');//抽离单独的css
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//只打包引入的方法，可以不完全打包js

const extractLess = new ExtractTextPlugin({
    filename: "../style/[name].css",
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
    entry: {
        index: './src/script/index.js',
        vendor: ['react', 'react-dom'] //配合CommonsChunkPlugin 单独打包
    },
    output: {
        path: path.resolve(__dirname, 'build/script'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
            ],
            loader: 'babel-loader',
            // options: {
            //     presets: ["es2015"]
            // },
        }, {
            test: /\.less$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            exclude: [
                path.resolve(__dirname, 'node_modules'),
            ],
            // use: [{
            // 	loader: 'style-loader'
            // },{
            // 	loader: 'css-loader'
            // },{
            // 	loader: 'less-loader'
            // }]
            use: extractLess.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }],
                fallback: 'style-loader'

            })
        }]
    },
    //当js可以在html直接引入时，配置externals可以阻止该js被打包
    // externals:{
    // 	'react':'React',
    // 	'react-dom':'ReactDom'
    // },
    plugins: [
        extractLess,
        new webpack.optimize.CommonsChunkPlugin({
            names: ["vendor", "runtime"]
        }),
        new UglifyJSPlugin()
    ]
}