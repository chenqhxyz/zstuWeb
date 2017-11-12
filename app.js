const Koa = require('koa');
const serve = require('koa-static')('static');
const router = require('./server/routes/router');

const app = new Koa();
app.use(router.routes());
app.use(serve);
app.listen(80);
