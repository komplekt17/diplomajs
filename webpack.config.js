const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'build.js',
		path: path.resolve(__dirname, 'build')
	},
	module: { 
		rules: [
			{
				test: /\.js$/,
				use:{
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
            })
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('build.css')
	]	
};