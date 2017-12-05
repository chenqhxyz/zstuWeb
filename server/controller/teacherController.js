const teacher = require('../model/teacher.js');
module.exports = async(ctx, next) => {
    const type = ctx.query.type;
    if (+type === 0) {
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
    } else if (+type === 1) {
        const name = ctx.session.name;
        const exist = await teacher.exist(name);
        ctx.body = {
            success: true,
            data: exist.classes
        }
    }
    
    next();
}