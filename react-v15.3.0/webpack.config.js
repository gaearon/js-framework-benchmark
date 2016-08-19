'use strict';

var webpack = require('webpack');

var cache = {};
var loaders = [
	{
		test: /\.jsx$/,
		loader: 'babel-loader'
	},
	{
		test: /\.es6\.js$/,
		loader: 'babel-loader'
	},
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader'
	}
];
var extensions = [
	'', '.js', '.jsx', '.es6.js'
];

module.exports = [{
	module: {
		loaders: loaders
	},
	entry: {
		main: './src/main.es6.js',
	},
	output: {
		path: './dist',
		filename: '[name].js'
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: false,
			beautify: true
		})
	],
	resolve: {
		extensions: extensions
	}
}];
