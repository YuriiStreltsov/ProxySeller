const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const ROOT_DIRECTORY = path.join(__dirname, "..");
const SRC_DIRECTORY = path.join(ROOT_DIRECTORY, "src");

const config = {
  entry: [path.resolve(__dirname, "../src/index.tsx")],
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  mode: "development",
  resolve: {
    modules: [ROOT_DIRECTORY, "src", "node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  performance: {
    hints: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(SRC_DIRECTORY, "index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(SRC_DIRECTORY, "assets"),
          to: path.join(ROOT_DIRECTORY, "build"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "icss",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // --------
      // SCSS MODULES
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif|webp|ttf)$/,
        exclude: /node_modules/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = config;
