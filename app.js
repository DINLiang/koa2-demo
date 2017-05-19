const koa = require('koa');

const config = require('./config/config');

const views = require('koa-views');

const router = require('koa-router')();
const index = require('./router/index');
const user = require('./router/user');

// const json = require('koa-json');
// const convert = require('koa-convert');
// const bodyparser = require('koa-bodyparser')();
// const logger = require('koa-logger');

const app = new koa();

// app.use(bodyparser);
// app.use(convert(json()));
// app.use(convert(logger()));
app.use(require('koa-static')(__dirname + config.static_path)); // 指定静态资源路径
// 设置模板
app.use(views(__dirname + config.view_path, {
  extension: 'ejs'
}));
// 设置路由
router.use('/', index.routes(), index.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
app.use(router.routes(), router.allowedMethods());


app.listen(3200);
