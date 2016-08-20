const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

const projectRoot = __dirname
const distPath = path.join(projectRoot, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(projectRoot, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test :/\.js$./,
      exclude: /node_modules/,
      loader: 'babel-loader'
    },{
      test: /\.css$/,
      loader:  ExtractTextPlugin.extract('style', 'css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:3]!postcss')
    }]
  },
  postcss: function(webpack){
  return [
    require('postcss-import')({
      addDependencyTo: webpack
    }),
    require('postcss-url')(),
    require('postcss-assets')({
      loadPaths: ['assets/'],
       baseUrl: 'http://localhost:8080/'
    }),
    require('precss')(),
    require('postcss-calc')(),
    require('postcss-functions')({
    glob: path.join(projectRoot, 'src', 'css-modules', '*.js')
    }),
    require('postcss-utilities')(),
    require('postcss-hexrgba')(),
    require('postcss-cssnext')(),
    require('postcss-sorting')(),
    require('postcss-discard-comments')()
   ]
  },
  plugins: [
    new CleanPlugin([distPath], { root: projectRoot }),
    new ExtractTextPlugin('main.css', {allChunks: true})
  ]
}
