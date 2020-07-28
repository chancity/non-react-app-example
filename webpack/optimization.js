const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (config) => ({
    namedModules: false,
   minimizer: config.isDevelopment ? [] : [
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: {
                   drop_console: true
                },
                mangle: true,
                output: {comments: false},
            },
            sourceMap: true
        })
    ]
});
