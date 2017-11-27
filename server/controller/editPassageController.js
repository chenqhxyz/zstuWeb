const passage = require('../model/passage.js');
module.exports = async(ctx, next) => {
    const id = ctx.query.id;
    const title = ctx.query.title;
    const content = ctx.query.content;
    await passage.editPass(id, title, content);
    ctx.body = {
        success: true,
        msg: '修改成功'
    }
    next();
}