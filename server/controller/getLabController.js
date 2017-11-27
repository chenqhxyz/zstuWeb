const lab = require('../model/lab.js');
module.exports = async(ctx, next) => {
    const data = await lab.getLab();
    ctx.body = {
        success: true,
        data: data
    };
    next();
};