const path = require("path");


module.exports = (env) => {
    const config = {
        isDevelopment: !!(env || {}).dev,
        directoryName: __dirname.toString()
    };

    const output = require("./webpack/output")(config);
    const module = require("./webpack/module")(config);
    const plugins = require("./webpack/plugins")(config);
    const optimization = require("./webpack/optimization")(config);
    const devServer = require("./webpack/devServer")(config);


    return {
        mode: config.isDevelopment ? 'development' : 'production',
        context: config.directoryName,
        entry: path.resolve(config.directoryName, 'src/index'),
        performance: {hints: false},
        devtool: "#source-map",
        resolveLoader: {
            modules: ["node_modules"]
        },
        resolve: {
            extensions: [".js"],
            alias: {
                react: 'preact/compat',
                react$: 'preact/compat',
                'react-dom': 'preact/compat',
                'react-dom$': 'preact/compat',
            }
        },
        output,
        module,
        plugins,
        optimization,
        devServer
    };
};
