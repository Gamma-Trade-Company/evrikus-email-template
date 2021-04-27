const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(jpe?g|png)$/u,
                use: 'base64-inline-loader?limit=1000&name=[name].[ext]'
            },
            {
                test: /\.html$/u,
                include: path.resolve(__dirname, 'src/html/'),
                use: ['raw-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
    devServer: {
        overlay: true,
        open: true
    },
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development'
}