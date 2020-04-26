const rules = require("./webpack.rules");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

rules.push({
  test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
  loader: "url-loader?limit=8192",
  options: {
    name: "[path][name].[ext]",
    publicPath: "..",
    context: "src",
  },
});

rules.push({
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [{ loader: "babel-loader" }],
});

module.exports = {
  // Put your normal webpack config below here
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
  module: {
    rules,
  },
};
