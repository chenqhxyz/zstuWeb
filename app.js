const Koa = require('koa');
const serve = require('koa-static')('static');
const router = require('./server/routes/router');
const session = require('koa-session');
// const config = require('./config.json');

const app = new Koa();
app.use(async(ctx, next) => {
    ctx.state.root = __dirname;
    await next();
});

app.keys = ['some secret hurr'];
app.use(session(app));
app.use(router.routes());
app.use(serve);
app.listen(80);
