# vue-cli-system

- 参考 [Webpack3 + Vue2 + Koa2 构建应用项目](https://github.com/zdliuccit/vue-webpack-config/tree/master/webpack3-basic-config)
- 参考 [Webpack3 + Vue2 + Koa2 构建文章](https://segmentfault.com/a/1190000011323920)

### 后端 koa

[koa简介](https://koa.bootcss.com/#)

### 具体步骤

  - 1、安装koa
  - 2、安装webpack
  - 3、koa2实现添加中间件

  #### 1、安装koa

    ```
    $ nvm install 7
    $ npm i koa
    $ node my-koa-app.js

    ```

  #### 2、安装webpack

    可参考 [入门Webpack，看这篇就够了](https://www.jianshu.com/p/42e11515c10f)

    1、安装

    ```
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


  #### 3、需要使用到的一些包的安装

  1、babel安装
  ```
    npm install babel-core babel-preset-env babel-polyfill babel-loader --save-dev
  ```
  2、跨平台设置环境变量
  ```
    npm install cross-env --save-dev
  ```
