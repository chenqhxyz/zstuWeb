const passage = require('../model/passage.js');
module.exports = async(ctx, next) => {
    const id = ctx.query.id;
    await passage.deletePass(id);
    ctx.body = {
        success: true,
        msg: '删除成功'
    };
    next();
}