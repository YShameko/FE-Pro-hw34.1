const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',

    output: {
        path: path.resolve(__dirname, 'client'),
        filename: 'bundle[fullhash].js',
        clean: true, 
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        
        // === FIX FOR NODE.JS CORE MODULES IN WEBPACK 5 ===
        // fallback: {
        //     // Для jest-worker та інших інструментів:
        //     "fs": false,
        //     "os": require.resolve("os-browserify/browser"),
        //     "path": require.resolve("path-browserify"),
        //     "stream": require.resolve("stream-browserify"),
        //     "assert": require.resolve("assert/"),
        //     "buffer": require.resolve("buffer/"),
        //     "util": require.resolve("util/"),
        //     "crypto": require.resolve("crypto-browserify"),
        //     "vm": require.resolve("vm-browserify"),
        //     "constants": require.resolve("constants-browserify"),
        //     "zlib": require.resolve("browserify-zlib"),
        //     "tty": require.resolve("tty-browserify"),
        //     "http": require.resolve("stream-http"),
        //     "https": require.resolve("https-browserify"),
        //     "querystring": require.resolve("querystring-es3"),
            
        //     // Модулі, які є суто Node.js і не мають браузерних аналогів:
        //     "worker_threads": false, 
        //     "child_process": false,
        //     "module": false,
        //     "inspector": false
        // }
        // // ===============================================
    },

    devtool: 'source-map',
    mode: 'development',
    // === ВИПРАВЛЕННЯ: Явно вимикаємо мінімізацію в режимі 'development' ===
    // optimization: {
    //     minimize: false, 
    // },

    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new CssPlugin({
            filename: 'style[fullhash].css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/db.json', to: './'}
            ]
        }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/preset-env"],
                            ["@babel/preset-react"]
                        ]
                    }
                }
            },
            {
                test: /\.css$/, 
                use: [
                    CssPlugin.loader, 
                    'css-loader'
                ],
            },
        ]
    },

    devServer: {
        port: 5000,
        static: {
            directory: path.join(__dirname, 'client')
        },
        devMiddleware: {
            writeToDisk: true
        },
        open: true,
        historyApiFallback: true
    }
}
