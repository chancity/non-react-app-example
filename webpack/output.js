const path = require("path");

module.exports = (config) => ({
    path: path.join(config.directoryName, "build"),
    pathinfo: true,
    filename: "non-react-example.js",
    chunkFilename: '[name].[contenthash].js',
});
