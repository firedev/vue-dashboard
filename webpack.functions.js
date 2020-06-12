// https://stackoverflow.com/questions/56827492/netlify-lambda-functions-keep-getting-path-must-be-of-type-string/56862810#56862810
const nodeExternals = require("webpack-node-externals");

module.exports = {
  externals: [nodeExternals()]
};
