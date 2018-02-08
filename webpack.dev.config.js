const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.config.js');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseConfig, {
	output: {
		path: path.resolve(__dirname, 'dist'), // Folder to store generated bundle
		filename: '[name].bundle.js',  // Name of generated bundle after build
		publicPath: ''
	},

	devtool: "inline-sourcemap",
    devServer: {  // configuration for webpack-dev-server
        inline: true,
		contentBase: './src',
		port: 9000, // port to run dev-server
    },
  	plugins: [
		  // Extract imported CSS into own file
		  new ExtractTextPlugin({ filename: '[name].css' }),
		  new BundleAnalyzerPlugin()
	],
  
});