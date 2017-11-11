const Koa = require('koa');
const serve = require('koa-static')('static');

const app = new Koa();
app.use(serve);
app.listen(80);
