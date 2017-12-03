const doc = require('../model/doc.js');
module.exports = async(ctx, next) => {
    const fs = require("fs");
    const storePath = ctx.query.path;
    await doc.deleteDocs(storePath);
    fs.unlinkSync(storePath);
    ctx.body = {
        success: true,
        msg: '删除成功'
    };
    next();
}