const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/server.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/public",
    publicPath: "/",
    filename: "alphabet-server.js"
  },
  target: "node",
  plugins: [
    new webpack.EnvironmentPlugin(
      'DIM_SWITCH_A',
      'DIM_SWITCH_B',
      'DIM_SWITCH_C'
    ),
    new BundleAnalyzerPlugin()
  ]
};
