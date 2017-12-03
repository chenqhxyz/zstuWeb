const teacher = require('../model/teacher.js');
module.exports = async(ctx, next) => {
    const name = ctx.query.name;
    const lessons = ctx.query.lessons;
    const classes = ctx.query.classes;
    const exist = await teacher.exist(name);
    if (exist) {
        await teacher.modifyOne(name, classes, lessons);
        ctx.body = {
            success: true,
            msg: '修改成功'
        }
    } else {
        await teacher.addOne(name, classes, lessons);
        ctx.body = {
            success: true,
            msg: '插入成功'
        }
    }
    next();
}