const tip = require('../model/tip.js');
module.exports = async(ctx, next) => {
    const content = ctx.query.content;
    await tip.addTip(content);
    ctx.body = {
        success: true,
        msg: '通知已发出'
    };
    next();
}