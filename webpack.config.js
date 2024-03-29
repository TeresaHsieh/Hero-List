const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.css$/i,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: false } }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|mp3)$/,
        use: [{ loader: "file-loader", options: { emitFile: true } }]
      }
    ]
  }
};
