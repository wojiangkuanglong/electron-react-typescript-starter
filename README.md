# electron-react-typescript-starter

## 版本环境

```html
node v8.9.4
npm v6.1.0
```

## 项目结构

```html
|--app              项目文件
  |--assets         静态资源
  |--components     组件
  |--containers     页面
  |--styles         样式文件
  |--utils          工具
|--dll              动态脚本文件
|--internals        内部构件
  |--scripts        构建脚本
|--release          打包后的文件
|--resources        打包文件所需图标
|--.babelrc
|--.editorconfig
|--.prettierrc      代码格式化工具prettier配置
|--CHANGELOG.md
|--LICENSE
|--package.json
|--tsconfig.json
|--tslint.json
|--webpack.config.base.js
|--webpack.config.main.prod.js
|--webpack.config.renderer.dev.dll.js
|--webpack.config.renderer.dev.js
|--webpack.config.renderer.prod.js
```

## 🔨 安装依赖

- use `npm install` or `yarn`

### 开发环境

- use `npm run dev`

### 生成可执行源文件

- use `npm run start`

### 使用 prettier 格式化代码

- use `npm run format`

### 打包当前平台安装包

- use `npm run package`

### 打包 Windows 平台安装包

- use `npm run package-win`

### 打包所有平台安装包(Mac、Linux、Windows)

- use `npm run package-all`

## 🚩 注意事项

```html
1.建议使用nrm切换淘宝源，或使用cnpm npm install -g cnpm --registry=https://registry.npm.taobao.org 提升安装速度

2.若打包window平台exe报错，建议全局翻墙，因为有可能会有一个安装包安装不上

3.项目开发所需依赖写到根目录package.json, 本机所需依赖安装至app文件夹下的package.json
```
