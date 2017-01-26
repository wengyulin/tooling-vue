# tooling-vue

[![NPM version](https://img.shields.io/npm/v/tooling-vue.svg?style=flat)](https://npmjs.com/package/tooling-vue) [![NPM downloads](https://img.shields.io/npm/dm/tooling-vue.svg?style=flat)](https://npmjs.com/package/tooling-vue) [![Build Status](https://img.shields.io/circleci/project/egoist/tooling-vue/master.svg?style=flat)](https://circleci.com/gh/egoist/tooling-vue) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add tooling tooling-vue --dev
```

## Usage

```bash
tooling build index.js --adapter vue
```

### CSS preprocessors

You can use any CSS preprocessors, just install relevant loaders:

```bash
# for example: scss
yarn add node-sass sass-loader --dev
```

Then set `lang` in SFC:

```vue
<style lang="scss">
  body {
    font-size: 14px
  }
</style>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**tooling-vue** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/tooling-vue/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
