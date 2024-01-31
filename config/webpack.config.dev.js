const path = require("path");
const config = require("./webpack.config.js");

config.devServer = {
  port: 8080,
  historyApiFallback: true,
  static: {
    directory: path.join(__dirname, "../build"),
  },
};

config.devtool = "inline-source-map";

module.exports = config;
