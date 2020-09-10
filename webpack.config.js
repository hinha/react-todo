const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackObfuscator = require("webpack-obfuscator");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
            },
            {
                enforce: "pre",
                test: /\.js?$/,
                loader: "source-map-loader",
            },
            {
                test: /\.scss$/i,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: true,
                        },
                    },
                    "css-loader",
                    "sass-loader",
                ],
            },
            //   {
            //     test: /\.scss$/,
            //     use: MiniCssExtractPlugin.extract({
            //       use: [
            //         {
            //           loader: "css-loader",
            //           options: {
            //             minimize: true,
            //           },
            //         },
            //         "sass-loader",
            //       ],
            //     }),
            //   },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
};