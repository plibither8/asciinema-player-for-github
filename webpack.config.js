'use strict';
const path = require('path');
const SizePlugin = require('size-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = () => ({
	devtool: 'sourcemap',
	stats: 'errors-only',
	entry: {
		index: './src/index',
		background: './src/background'
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	plugins: [
		new SizePlugin(),
		new CopyWebpackPlugin([
			{
				context: './src',
				from: '*',
				ignore: '*.js'
			},
			{
				from: 'src/icons',
				to: 'icons'
			},
			{
				from: 'node_modules/webextension-polyfill/dist/browser-polyfill.min.js'
			}
		])
	],
	optimization: {
		// Without this, function names will be garbled and enableFeature won't work
		concatenateModules: true,

		// Automatically enabled on production; keeps it somewhat readable for AMO reviewers
		minimizer: [
			new TerserPlugin({
				parallel: true,
				terserOptions: {
					mangle: false,
					compress: false,
					output: {
						beautify: true,
						indent_level: 2 // eslint-disable-line camelcase
					}
				}
			})
		]
	}
});
