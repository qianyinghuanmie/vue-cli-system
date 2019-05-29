# vue-cli-system

  #### 参考

-  [Webpack3 + Vue2 + Koa2 构建应用项目](https://github.com/zdliuccit/vue-webpack-config/tree/master/webpack3-basic-config)
-  [Webpack3 + Vue2 + Koa2 构建文章](https://segmentfault.com/a/1190000011323920)
-  [koa2从起步到填坑](https://www.jianshu.com/p/6b816c609669)
-  [Koa 框架教程](http://www.ruanyifeng.com/blog/2017/08/koa.html)

### 后端 koa

[koa简介](https://koa.bootcss.com/#)

### 前端 vue

[vue简介](https://cn.vuejs.org/)

### 具体步骤

  - 1、安装koa
  - 2、安装webpack
  - 3、koa2实现添加中间件

  #### 1、安装koa

  ```js
    $ nvm install 7
    $ npm i koa
    $ node my-koa-app.js

  ```

  #### 2、安装webpack

    可参考 [入门Webpack，看这篇就够了](https://www.jianshu.com/p/42e11515c10f)

    1、安装

      ```js
        //全局安装
        npm install -g webpack
        //安装到你的项目目录
        npm install --save-dev webpack
        //初始化
        npm init

      ```

    2、新建配置文件

  根目录下的配置文件

   名称|描述
   --|:--:
   server.config.js| 配置服务端口以及代理
   app.config.js| 整体项目配置
   constants.js| 存放一些本地后台开发的api

  config目录下的配置文件

  名称|描述
  --|:--:
  index.js| 服务入口
  koa-dev-server.js| koa测试环境配置
  koa-prod-server.js| koa正式环境配置


  #### 3、需要使用到的一些包的安装

  1、babel安装
  ```
    npm install babel-core babel-preset-env babel-polyfill babel-loader --save-dev
  ```
  2、跨平台设置环境变量
  ```
    npm install cross-env --save-dev
  ```
  3、[winston安装](https://github.com/winstonjs/winston):A logger for just about everything.
  ```
    npm install winston --save-dev
  ```
  4、[koa-router安装](https://github.com/ZijianHe/koa-router):Router middleware for koa.
  ```
    npm install koa-router --save-dev
  ```
  5、[node-ip安装](https://github.com/indutny/node-ip):IP address tools for node.js
  ```
  npm install ip --save-dev
  ```
  6、[open安装](https://github.com/sindresorhus/open):Open stuff like URLs, files, executables. Cross-platform.
  ```
  npm install open --save-dev
  ```
  7、[koa-logger安装](https://github.com/koajs/logger):Development style logging middleware
  ```
  npm install koa-logger --save-dev
  ```
  8、[koa-convert安装](https://github.com/koajs/convert)
  ```
  npm install koa-convert --save-dev
  ```
  9、[koa-webpack-dev-middlewar安装](https://github.com/yiminghe/koa-webpack-dev-middleware)
  ```
  npm install koa-webpack-dev-middleware --save-dev
  ```
  10、[koa-webpack-hot-middleware安装](https://github.com/octatone/koa-webpack-hot-middleware)
  ```
  npm install  koa-webpack-hot-middleware --save-dev
  ```
  11、[case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin):Enforces case sensitive paths in Webpack requires.
  ```
  npm install  case-sensitive-paths-webpack-plugin --save-dev
  ```
  12、[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)：Simplifies creation of HTML files to serve your webpack bundles
  ```
   npm i --save-dev html-webpack-plugin
  ```
  13、[autoprefixer](https://github.com/postcss/autoprefixer):Parse CSS and add vendor prefixes to rules by Can I Use
  ```
  npm install  autoprefixer --save-dev
  ```
  14、[postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)：Convert pixel units to rem (root em) units using PostCSS
  ```
  npm install postcss-pxtorem --save-dev
  ```
  15、[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin):Extracts text from a bundle into a separate file
  ```
  npm install --save-dev extract-text-webpack-plugin
  ```
  16、[vue-loader](https://github.com/vuejs/vue-loader):Webpack loader for Vue.js components
  ```
  npm install --save-dev vue-loader
  ```
  17、[css-loader](https://github.com/webpack-contrib/css-loader):CSS Loader
  ```
  npm install --save-dev css-loader
  ```

  18、[vue-style-loader](https://github.com/vuejs/vue-style-loader): vue style loader module for webpack
  ```
  npm install --save-dev vue-style-loader
  ```
  19、[stylus-loader](https://github.com/shama/stylus-loader): A stylus loader for webpack.
  ```
  npm install stylus-loader stylus --save-dev
  ```
  20、[eslint](https://github.com/eslint/eslint):A fully pluggable tool for identifying and reporting on patterns in JavaScript
  ```
  npm install eslint --save-dev
  ```
  21、[eslint-loader](https://github.com/webpack-contrib/eslint-loader):eslint loader (for webpack)
  ```
  npm install eslint-loader --save-dev
  ```
  22 [json-loader](https://github.com/webpack-contrib/json-loader):json loader module for webpack - UNMAINTAINED
  ```
  npm install json-loader --save-dev
  ```
  23、[url-loader](https://github.com/webpack-contrib/url-loader):A loader for webpack which transforms files into base64 URIs
  ```
  npm install url-loader --save-dev
  ```
  24、[koa-compress](https://github.com/koajs/compress):Compress middleware for koa
  ```
  npm install koa-compress --save-dev
  ```
  25、[vue-template-compiler](https://www.npmjs.com/package/vue-template-compiler)
  ```
  npm install vue-template-compiler --save-dev
  ```
  26、[vue-router](https://github.com/vuejs/vue-router)
  ```
  npm install vue-router --save-dev
  ```
  27、[axios](https://github.com/axios/axios)
  ```
  npm install axios --save-dev
  ```
  28、[friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin):Recognizes certain classes of webpack errors and cleans, aggregates and prioritizes them to provide a better Developer Experience.
  ```
  npm install friendly-errors-webpack-plugin --save-dev
  ```
  29、[postcss-loader](https://github.com/postcss/postcss-loader):PostCSS loader for webpack
  ```
  npm i -D postcss-loader
  ```
  30、[postcss](https://github.com/postcss/postcss):Transforming styles with JS plugins
  ```
  npm install postcss --save-dev
  ```
  31、[koa-better-http-proxy](https://github.com/nsimmons/koa-better-http-proxy):Proxy middleware for Koa. Based on villadora/express-http-proxy
  ```
  npm install koa-better-http-proxy --save-dev
  ```
  32、
  #### 4、中间件的使用

  config目录下的utils下使用的中间件

  名称|描述
  --|:--:
  env.js|运行环境变量
  errorMiddleWare.js| 错误处理中间件
  httpMiddleWare.js| http请求中间件
  proxyMiddleWare.js| prxoy代理中间件 匹配代理、请求重定向
  setCookieMiddleWare.js| 设置cookie中间件
  token.js| token处理
