const passage = require('../model/passage.js');
module.exports = async(ctx, next) => {
    const title = ctx.query.title;
    const content = ctx.query.content;
    await passage.addPassage(title, content);
    ctx.body = {
        success: true,
        msg: '信息输入成功'
    };
    next();
}