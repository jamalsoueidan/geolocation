const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// https://github.com/philolo1/webpack-react-hot-reloading-sample
const r = path.resolve

module.exports = {
  devtool: 'eval',
  context: r(__dirname, './src'),
  entry: [
    r(__dirname, './src/hot_reload.js')
  ],
  output: {
    path: r(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [["es2015", { "modules": false }], "stage-0", "react"],
          plugins: ["react-hot-loader/babel"]
        },
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: { importLoaders: 1, modules: false },
            },
            "postcss-loader"
          ]
        })
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.sass'],
    modules: [r(__dirname, './src'), 'node_modules']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin("styles.css")
  ]
};
