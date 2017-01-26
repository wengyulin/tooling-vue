const path = require('path')

module.exports = {
  webpack(cfg, options) {
    const getLoaders = require(
      path.join(process.cwd(), 'node_modules/tooling/lib/css-loaders')
    )

    const loaders = getLoaders({
      extract: options.mode === 'build',
      styleLoader: 'vue-style-loader'
    })

    cfg.module.rules.push({
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders
      }
    })

    const modules = path.join(__dirname, 'node_modules')
    cfg.resolve.modules.push(modules)
    cfg.resolveLoader.modules.push(modules)

    cfg.resolve.extensions.push('.vue')

    return cfg
  }
}
