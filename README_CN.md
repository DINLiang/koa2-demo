# koa2-demo

[English Document](https://github.com/easy-templates/koa2-demo)

基于 [koa2](https://github.com/koajs/koa)的实践。

数据库使用mysql，通过[mysql](https://github.com/mysqljs/mysql)以及[co-mysql](https://github.com/coderhaoxin/co-mysql)实现数据库连接。

视图使用[koa-views](https://github.com/queckezz/koa-views)以及[ejs](https://github.com/mde/ejs)进行渲染。

路由处理使用[koa-router](https://github.com/alexmingoia/koa-router)。

使用[gulp](https://github.com/gulpjs/gulp) + [nodemon](https://github.com/remy/nodemon) （自动重启node服务） + [browserSync](https://github.com/npm/security-holder) （处理静态文件改变后刷新浏览器）来实现文件改变之后重启服务并刷新浏览器。

## 技术栈

- koa2
- mysql
- co-mysql
- koa-views
- ejs
- koa-router
- gulp
- nodemon
- browserSync

## 功能

目前包含欢迎页以及用户页，用户页显示数据库中查询到的用户信息。

## 快速上手

### 安装

```
$ git clone git@github.com:easy-templates/koa2-demo.git
$ npm i
```

### 使用

```
$ npm run start
```

此时浏览器会自动打开，弹出首页。

修改url为：<http://localhost:3201/user>,查询所有用户信息。更多参数请查看具体代码。

## 如何参与贡献

fork我们的项目到您的repo里面，通过git来提交给我们pr，我们真诚希望您的参与,使我们变得更好。

## 反馈

如在使用过程中遇到任何问题，可以在[这里](https://github.com/easy-templates/koa2-demo/issues)提交issue反馈；

## Licence

[LICENSE](https://github.com/easy-templates/koa2-demo/blob/master/LICENSE)
