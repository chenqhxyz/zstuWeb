const passage = require('../model/passage.js');
module.exports = async(ctx, next) => {
    const data = await passage.getPassage();
    ctx.body = {
        success: true,
        data
    };
    next();
}