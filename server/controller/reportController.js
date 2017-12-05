const report = require('../model/report.js');
module.exports = async(ctx, next) => {
    const fs = require('fs');
    const path = require('path');
    const storePath = path.join(ctx.state.root , 'static/uploads/typ3/', ctx.req.file.originalname);
    const reader = fs.createReadStream(ctx.req.file.path);
    const stream = fs.createWriteStream(storePath);
    const url = `http://local.zstu.com/uploads/typ3/${ctx.req.file.originalname}`;
    reader.pipe(stream);
    const student = ctx.session.name;
    await report.writeReport(ctx.req.file.originalname, storePath, url, student, ctx.session.class);
    ctx.body = {
        filename: ctx.req.file
    };
    next();
}