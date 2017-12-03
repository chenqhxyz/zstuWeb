const exp = require('../model/exp.js');
module.exports = async(ctx, next) => {
    const fs = require('fs');
    const path = require('path');
    const storePath = path.join(ctx.state.root , 'static/uploads/typ2/', ctx.req.file.originalname);
    const reader = fs.createReadStream(ctx.req.file.path);
    const stream = fs.createWriteStream(storePath);
    const url = `http://local.zstu.com/uploads/typ2/${ctx.req.file.originalname}`;
    reader.pipe(stream);
    const teacher = ctx.session.name;
    await exp.writeExp(ctx.req.file.originalname, storePath, url, teacher);
    ctx.body = {
        filename: ctx.req.file
    }
    next();
}