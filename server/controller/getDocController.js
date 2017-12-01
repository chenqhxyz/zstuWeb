const doc = require('../model/doc.js');
module.exports = async(ctx, next) => {
    const data = await doc.getDocs();
    ctx.body = {
        success: true,
        data
    }
    next();
}