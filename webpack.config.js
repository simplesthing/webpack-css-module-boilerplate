const path = require('path')
const webpack = require('webpack')

const projectRoot = __dirname
const assetPath = path.join(projectRoot, 'assets')

module.exports = {
	entry: './src/index.js',
  output: {
    path: projectRoot,
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
	module: {
		loaders: [{
			test :/\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
      query: {
        presets: ['es2015', 'stage-0']
      }
		},{
			test: /\.css$/,
			loader: 'style!css?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:3]!postcss'
		},{
      test: /\.(png|jpg|otf)$/,
      loader: 'url?limit=25000'
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
		require('postcss-browser-reporter')()
	 ]
	},
  plugins: []
}
