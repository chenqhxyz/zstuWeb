const doc = require('../model/doc.js');
module.exports = async(ctx, next) => {
    const fs = require('fs');
    const path = require('path');
    const storePath = path.join(ctx.state.root , '/uploads/typ1/', ctx.req.file.originalname);
    const reader = fs.createReadStream(ctx.req.file.path);
    const stream = fs.createWriteStream(storePath);
    reader.pipe(stream);
    await doc.writeDoc(ctx.req.file.originalname, storePath);
    ctx.body = {
        filename: ctx.req.file
    }
    next();
}