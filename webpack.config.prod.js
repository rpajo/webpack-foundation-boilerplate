const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
	target: "web",
	mode: 'production',

	entry: path.join(__dirname, '/src/app/index.js'),

	output: {
		filename: '[hash].bundle.js'
	},

	module: {  // where we defined file patterns and their loaders
    rules: [
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: 'babel-loader',
				options: {
          presets: ['@babel/preset-env']
        }
			}
		]},
		{
			test: /\.(sa|sc|c)ss$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
				'postcss-loader',
				'sass-loader',
			],
		},
		{
			test: /\.(jpe?g|png|gif|svg|tga|gltf|babylon|mtl|pcb|pcd|prwm|obj|mat|mp3|ogg)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						limit: 10000,
						name: "assets/[hash].[ext]"
					},
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

	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({})
		]
	},
  	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/public/index.html",
			filename: 'index.html',
			favicon: './src/public/images/favicon-32.png'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),

		new MiniCssExtractPlugin({
			filename: '[hash].css',
			chunkFilename: '[id].css'
		})
	]
  
};
