const exp = require('../model/exp.js');
module.exports = async(ctx, next) => {
    const type = ctx.query.type;
    if (+type === 0) {
        const data = await exp.getExps();
        ctx.body = {
            success: true,
            data
        };
    } else if (+type === 1) {
        const fs = require("fs");
        const storePath = ctx.query.path;
        await exp.deleteExp(storePath);
        fs.unlinkSync(storePath);
        ctx.body = {
            success: true,
            msg: '删除成功'
        };
    }
    next();
}