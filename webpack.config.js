var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "index.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/, 
        use: [
            'style-loader',
            'css-loader',
            {   
                loader: 'sass-loader',
                options: {
                    implementation: require('sass')
                }
            }
        ]
      }
    ]
  },
  externals: {
    react: "commonjs react"
  }
};