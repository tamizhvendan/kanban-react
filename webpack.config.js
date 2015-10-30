var path = require('path')
var webpack = require('webpack');
var HtmlWebPackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var target = process.env.npm_lifecycle_event;
var rootPath = path.resolve(__dirname);
var appPath = path.resolve(rootPath, 'app');
var buildPath = path.resolve(rootPath, 'build');

var common = {
  entry : appPath,
  output : {
    path: buildPath,
    filename : 'bundle.js'
  },
  resolve : {
    extensions : ['','.js','.jsx']
  },
  module : {
    loaders :[
      {
        test : /\.css$/,
        loaders : ['style','css'],
        include : appPath
      },
      {
        test : /\.jsx?/,
        loaders : ['babel'],
        include : appPath
      }
    ],
  },
  plugins : [
    new HtmlWebPackPlugin({
      title : 'Kanban app powered by React and Webpack'
    })
  ]
};

if (target === 'start' || !target) {
  process.env.BABEL_ENV = target;
  module.exports = merge(common, {
    devtool : 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}
