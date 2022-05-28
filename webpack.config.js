const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader",
      },
    ],
  },
};
