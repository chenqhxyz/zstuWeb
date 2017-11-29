module.exports = async(ctx, next) => {
    const fs = require('fs');
    const path = require('path');
    const reader = fs.createReadStream(ctx.req.file.path);
    const stream = fs.createWriteStream(path.join( ctx.state.root , '/uploads/typ1/', ctx.req.file.originalname));
    reader.pipe(stream);

    ctx.body = {
        filename: ctx.req.file
    }
    next();
}