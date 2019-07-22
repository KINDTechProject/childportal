const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDir = path.resolve(__dirname, "./src");
const outDir = path.resolve(__dirname, "./www");

module.exports = {
    devtool: process.env.NODE_ENV === "production" ? "none" : "inline-source-map",
    entry: path.resolve(appDir, "index.tsx"),
    output: {
        path: path.resolve("./www"),
        publicPath: "/",
        filename: "[name].js"
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
    mode: process.env.NODE_ENV || "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            compilerOptions: {
                                declaration: false,
                            }
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Kind",
            contentBase: outDir
        })
    ],
    devServer: {
        compress: false,
        historyApiFallback: true,
        open: true,
        port: 3000
    }
};
