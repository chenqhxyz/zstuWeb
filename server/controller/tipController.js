const tip = require('../model/tip.js');
module.exports = async(ctx, next) => {
    const type = ctx.query.type;
    if (+type === 0) {
        const content = ctx.query.content;
        await tip.addTip(content);
        ctx.body = {
            success: true,
            msg: '通知已发出'
        };
    } else if (+type === 1) {
        const data = await tip.getTip();
        ctx.body = {
            success: true,
            data
        };
    }
    next();
}