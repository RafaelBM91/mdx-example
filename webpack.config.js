const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    target: 'web',
    devtool: 'source-map',
    devServer: {
        open: true,
        hot: true,
        host: 'localhost'
    },
    resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: ['.mdx', '.ts', '.tsx', '.js'],
        alias: {
            '@app': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './src/assets')
        }
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader'
                }
            },
            {
                test: /\.mdx?$/,
                use: [
                    'babel-loader',
                    '@mdx-js/loader'
                ]
            },
            {
                test: /\.js?$/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'image'
                },
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/template/index.html',
        }),
        new CleanWebpackPlugin()
    ]
};
