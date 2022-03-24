const webpack = require("webpack");
const path = require("path"); 

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jQuery"
        }),
    ],
    mode: 'development'
}; 