const path = require('path')

module.exports = options => ({
  webpack(cfg) {
    const {getLoaders} = require(
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

    const modules = path.join(__dirname, '../node_modules')
    cfg.resolve.modules.push(modules)
    cfg.resolveLoader.modules.push(modules)

    cfg.resolve.extensions.push('.vue')

    if (!options.lib) {
      if (/\.vue$/.test(options.entry) || options.mount) {
        cfg.entry.client = cfg.entry.client.map(entry => {
          if (entry === options.entry) {
            return path.join(__dirname, 'default-entry.es6')
          }
          return entry
        })
        cfg.resolve.alias = cfg.resolve.alias || {}
        cfg.resolve.alias['your-tasteful-component'] = options.entry
      }
    }

    return cfg
  }
})
