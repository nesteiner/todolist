module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
	ignored: [/node_modules/, /project.org/]
      },
    },
  },

  runtimeCompiler: true
}