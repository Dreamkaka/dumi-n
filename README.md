# dumi-theme-antd-style

[![NPM version][npm-image]][npm-url] [![NPM downloads][download-image]][download-url] [![install size][npm-size]][npm-size-url]

[![Test CI status][test-ci]][test-ci-url] [![Deploy CI][release-ci]][release-ci-url] [![Coverage][coverage]][codecov-url]

[![ docs by dumi][dumi-url]](https://d.umijs.org/) [![Build With father][father-url]](https://github.com/umijs/father/)

<!-- gitpod url -->

[gitpod-badge]: https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod
[gitpod-url]: https://gitpod.io/#https://github.com/ant-design/dumi-theme-antd-style

<!-- umi url -->

[dumi-url]: https://img.shields.io/badge/docs%20by-dumi-blue
[father-url]: https://img.shields.io/badge/build%20with-father-028fe4.svg

<!-- npm url -->

[npm-image]: https://img.shields.io/npm/v/dumi-theme-antd-style.svg?style=flat-square&color=deepgreen&label=latest
[npm-url]: https://npmjs.org/package/dumi-theme-antd-style
[npm-size]: https://img.shields.io/bundlephobia/minzip/dumi-theme-antd-style?color=deepgreen&label=gizpped%20size&style=flat-square
[npm-size-url]: https://packagephobia.com/result?p=dumi-theme-antd-style

<!-- coverage -->

[coverage]: https://codecov.io/gh/arvinxx/dumi-theme-antd-style/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/arvinxx/dumi-theme-antd-style/branch/master

<!-- Github CI -->

[test-ci]: https://github.com/arvinxx/dumi-theme-antd-style/workflows/Test%20CI/badge.svg
[release-ci]: https://github.com/arvinxx/dumi-theme-antd-style/workflows/Release%20CI/badge.svg
[test-ci-url]: https://github.com/arvinxx/dumi-theme-antd-style/actions?query=workflow%3ATest%20CI
[release-ci-url]: https://github.com/arvinxx/dumi-theme-antd-style/actions?query=workflow%3ARelease%20CI
[download-image]: https://img.shields.io/npm/dm/dumi-theme-antd-style.svg?style=flat-square
[download-url]: https://npmjs.org/package/dumi-theme-antd-style

## 简介

dumi-theme-antd-style 是为 dumi2 打造的一款文档站主题包，提供了更加美观、易用的研发与阅读体验

![亮色模式](https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*P966Q7N2r08AAAAAAAAAAAAADoN6AQ/fmt.webp)
![暗色模式](https://mdn.alipayobjects.com/huamei_rqvucu/afts/img/A*PW92S7Qh8l4AAAAAAAAAAAAADoN6AQ/fmt.webp)

### 特性

- 💠 **现代化主题风格** ： 本主题包采用了流动色、毛玻璃、光影质感、自然动效等现代化的设计表现手法，将界面以更加简约、美观的方式呈现，使得文档更加直观、易读、易用；
- 🌓 **亮暗色主题模式一键切换**： 基于 antd v5 自定义了亮色与暗色主题算法，默认提供美观易用的亮暗色主题。用户可以根据自己的喜好选择主题模式，在不同的光线环境下都能获得良好的阅读体验。
- 💅 **基于 Ant Design 与 CSSinJS**： 本主题包使用 antd 作为基础组件库，并使用了 CSSinJS 实现样式方案，帮助更好地控制样式的细节，提高样式的复用性和可维护性。底层使用了 [antd-style](https://https://github.com/ant-design/antd-style) 样式库，在书写样式上更加灵活、可读、易于维护。
- 🪄 **精美的语法高亮**： 本主题包提供准确、精美的语法高亮特性。底层采用了现代化的语法高亮库 Shiki 与 Prism，并提供了丰富的代码高亮方案，帮助用户更好地阅读代码；
- 🧩 **组件灵活复用**： 本主题包为本地主题定制提供了很高的灵活度，默认导出了主题包中的精品组件，可以将组件作为独立的模块进行复用，开发者可以在 dumi 本地主题包中自由组合使用；
- 📱 **移动端适配良好**： 本主题包对移动端适配良好，基于 CSSinJS 的灵活样式方案，多套布局实现轻而易举。用户多端操作体验一致且顺滑；

## 快速上手

### 安装

推荐使用 `pnpm` 安装

```bash
pnpm i dumi-theme-antd-style -D
```

### 使用

安装完毕后，使用 dumi 启动站点，dumi 会自动加载主题，即可开始使用。

配置详情查看 [文档配置](https://dumi-theme-antd-style.arvinx.app/config)。

## 更新日志

详情：[CHANGELOG](./CHANGELOG.md)

## License

[MIT](./LICENSE)
