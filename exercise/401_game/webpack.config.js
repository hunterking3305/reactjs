var path = require('path');

module.exports = {
  context: path.resolve('src'),
  entry:{
    bundle: 'app.jsx',
  },
  output:{
    path: path.resolve('dist'),
    filename: '[name].js',
  },
// devtool? and devServer hash, version...?
  devtool: 'eval-source-map',
  devServer:{
    stats:{
      hash:         false,
      version:      false,
      timings:      true,
      assets:       true,
      chunks:       false,
      chunkModules: false,
      modules:      false,
      cached:       false,
      reasons:      false,
      source:       false,
      errorDetails: true,
      chunkOrigins: false,
      color: true,
    },
  },
// resolve -> modules ? and extensions?
  resolve:{
    modules: [
      path.resolve('src'),
      path.resolve('src/components'),
      path.resolve('node_modules'),
    ],
    extensions:['.js', '.jsx'],
  },
  resolveLoader:{
    modules: [
      path.resolve('node_modules'),
    ],
  },

  module:{
    rules:[{
      test: /\.jsx$/,
      loader: 'babel-loader?presets[]=react',
      include: path.resolve('src'),
    },{
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader',
      include: path.resolve('src'),
    },{
      test: /\.html$/,
      loader: 'file-loader?name=[name].html',
      include: path.resolve('src'),
    },{
      loader: 'file-loader?name=[path][name].[ext]',
      include: path.resolve('src/assets'),
    }],
  },

};

// QA:
// (1) js and css will be a bundle package?
// (2) images will not be packed ? but it will move to other dir?
// (3) package.json all of modules must be used ?
