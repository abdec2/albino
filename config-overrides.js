const webpack = require("webpack");

module.exports = function override(config, env) {
   
    config.resolve.fallback = {
        http: require.resolve("http-browserify"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
    };

    config.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        }),
    );

    return config;
  }
  