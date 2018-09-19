const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	target: "web",
	mode: 'development',
	
	entry: path.join(__dirname, '/src/app/index.js'),

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},

	devServer: {
		port: 9000, // port to run dev-server
		contentBase: path.join(__dirname, 'src/public'),
		watchContentBase: true,
    watchOptions: {
      poll: true
		}
	},

	devtool: 'source-map',

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
						name: "assets/[name].[ext]"
					},
				}
			]
		}	
	]},

	optimization: {
		minimize: false
	},
  	plugins: [
			new HtmlWebpackPlugin({
				template: __dirname + "/src/public/index.html",
				inject: 'body',
				favicon: './src/public/images/favicon-32.png'
			}),
			new webpack.ProvidePlugin({
				$: 'jquery',
				jQuery: 'jquery',
			}),

			new BundleAnalyzerPlugin(),

			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[id].css'
			})
		]
  
};
