const path = require("path");

module.exports = (config) => ({
    open: true,
    openPage: "index.html",
    contentBase: path.join(config.directoryName, 'build'),
    compress: true,
    port: 9000
});
