const webpack = require("webpack");
var path = require('path');
var fs = require('fs');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// thanks: https://jlongster.com/Backend-Apps-with-Webpack--Part-I
// https://webpack.js.org/configuration/externals/
const nodeModules = fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .reduce((nodeModules, mod) => {
    nodeModules[mod] = 'commonjs ' + mod;
    return nodeModules
  }, {});

module.exports = {
  entry: "./src/server.js",
  target: "node",
  externals: nodeModules,
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "alphabet-server.js"
  },
  plugins: [
    new webpack.EnvironmentPlugin(
      'DIM_SWITCH_A',
      'DIM_SWITCH_B',
      'DIM_SWITCH_C'
    ),
    new BundleAnalyzerPlugin()
  ]
};
