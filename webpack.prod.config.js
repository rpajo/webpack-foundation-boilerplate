
const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config.js');
const merge = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
	output: {
		path: path.resolve(__dirname, 'dist'), // Folder to store generated bundle
		filename: '[name].bundle.[chunkhash].js',  // Name of generated bundle after build
		publicPath: ''
	},

	devtool: "inline-sourcemap",

	plugins: [
		// Extract imported CSS into own file
		new ExtractTextPlugin('[name].bundle.[chunkhash].css'),
		// Minify JS
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: false,
			compress: true,
		}),
		// Minify CSS
		new webpack.LoaderOptionsPlugin({
			minimize: true,
		}),
		new CleanWebpackPlugin(['dist'])
	]
});