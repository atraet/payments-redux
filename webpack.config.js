module.exports = {
    entry: {
        payments: './src/payments/index.js',
        shop: './src/shop/index.js'
    },
    output: {
        path: __dirname + '/__build__',
        publicPath: '/__build__',
        filename: '[name].js'
    }
    ,
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
    ,
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
    ,
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
}
;
