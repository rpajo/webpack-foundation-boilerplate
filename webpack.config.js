const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: [ "index" ], // webpack entry point. Module to start building dependency graph
		vendor: [ "jquery" ]
	},
  module: {  // where we defined file patterns and their loaders
    rules: [
		{
			test: /\.js$/,
			include: path.resolve(__dirname, 'src'),
			use: [{
				loader: 'babel-loader'
			}
		]},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', "postcss-loader", 'sass-loader']
			})
		},
		{
			test: /\.(png|jp(e*)g|gif)$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: "assets/[hash].[ext]"
					},
				}
			]
		},
		{
			test: /\.(webm|mp4)$/,
			use: [
				{
					loader: 'file-loader',
					options: { name: 'assets/[name].[ext]' }
				}
			]
		}
		
	]},

	resolve: {
		alias: {
			jquery: "jquery/dist/jquery",
			index: path.resolve(__dirname, 'src/app/index.js')
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/src/public/index.html",
			inject: 'body',
			chunks: ['app', 'vendor'],
			// sort chucnk order: Load Vendor files first
			chunksSortMode: function(a, b) {
				return (a.names[0] < b.names[0])? 1 : -1;
			 }
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		})
	]
}