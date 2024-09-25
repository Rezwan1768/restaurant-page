const path = require("path");

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        // clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        static: './dist',
    },
    module: {
        rules: [

         {
           test: /\.(png|svg|jpg|jpeg|gif)$/i,
           type: 'asset/resource',
         },
        ],
      },
};