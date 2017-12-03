const teacher = require('../model/teacher.js');
module.exports = async(ctx, next) => {
    const name = ctx.query.name;
    const exist = await teacher.exist(name);
    ctx.body = {
        success: true,
        data: exist
    };
    next();
}