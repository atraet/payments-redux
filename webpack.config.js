module.exports = {
    entry: {
        bundle: './src/index.js',
        shop: './src/shop/index.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
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
