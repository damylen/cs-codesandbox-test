module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      symlinks: false,
      alias: {
        "@": "src/"
      }
    },

    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'disabled',
      //   generateStatsFile: true,
      //   statsOptions: { source: false }
      // })
    ],
    module: {
      rules: [
        {
          test: /\.s(c|a)ss$/,
          use: [
            "vue-style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("sass"),
                fiber: require("fibers"),
                indentedSyntax: true // optional
              }
            }
          ]
        },
        {
          test: /\.html$/,
          loader: "raw-loader",
          exclude: ["/public/index.html"]
        }
      ]
    }
  }
};
