const CopyWebpackPlugin = require("copy-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');



module.exports = (config) => {
    const plugins = [
        new CleanWebpackPlugin(),
        // Copy non-packed resources needed by the app to the release directory
        new CopyWebpackPlugin([{
            context: config.directoryName,
            from: "public/",
            to: ""
        }])
    ];

    return plugins;
};
