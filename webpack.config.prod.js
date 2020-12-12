const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
	target: 'web',
	mode: 'production',

	entry: path.join(__dirname, '/src/app/index.js'),

	output: {
		path: path.resolve(process.cwd(), 'dist'),
		filename: '[name].[chunkhash].bundle.js'
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
				]
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
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
		]
	},

	resolve: {
		alias: {
			jquery: "jquery/dist/jquery",
			index: path.resolve(__dirname, 'src/app/index.js')
		}
	},

	optimization: {
		minimize: true,
		usedExports: true,
		minimizer: [
			new TerserPlugin(),
			new CssMinimizerPlugin()
		],
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					enforce: true,
					chunks: 'all'
				}
			}
		}
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: __dirname + "/src/public/index.html",
			inject: 'body',
			favicon: './src/public/images/favicon-32.png',
			minify: {
				// some foundation styles are based on html attributes which webpack removes by default
				// disable this to prevent this
				removeRedundantAttributes: false
			}
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
		}),

		new MiniCssExtractPlugin({
			filename: '[chunkhash].css'
		})
	]

};
