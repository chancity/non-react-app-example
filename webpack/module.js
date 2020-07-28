module.exports = (config) => ({
    rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-env"],
                    plugins: [
                        "@babel/plugin-transform-destructuring",
                        "@babel/plugin-transform-block-scoping",
                        "@babel/plugin-transform-arrow-functions",
                        "@babel/plugin-transform-template-literals",
                        "@babel/plugin-transform-computed-properties",
                        "@babel/plugin-transform-shorthand-properties",
                        "@babel/plugin-proposal-throw-expressions",
                        "@babel/plugin-transform-spread",
                        "@babel/plugin-transform-async-to-generator",
                        ["@babel/plugin-transform-react-jsx"],
                        ["babel-plugin-styled-components", {
                            "pure": true
                        }]
                    ]
                }
            }
        }]
});
