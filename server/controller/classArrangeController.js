const arrange = require('../model/class-arrange.js');
module.exports = async(ctx, next) => {
    const type = ctx.query.type;
    if (+type === 1) {
        const name = ctx.query.name;
        const theClass = ctx.query.theClass;
        const lesson = ctx.query.lesson;
        const lab = ctx.query.lab;
        const time = ctx.query.time;
        const teacher = ctx.query.teacher;
        await arrange.addInf(name, theClass, lesson, lab, time, teacher);
        ctx.body = {
            success: true,
            msg: '写入成功'
        };
    } else if (+type === 2) {
        const name = ctx.query.name;
        const theClass = ctx.query.theClass;
        const lesson = ctx.query.lesson;
        const lab = ctx.query.lab;
        const time = ctx.query.time;
        await arrange.modifyInf(name, theClass, lesson, lab, time);
        ctx.body = {
            success: true,
            msg: '修改成功'
        };
    } else if (+type === 3) {
        const name = ctx.query.name;
        await arrange.dropInf(name);
        ctx.body = {
            success: true,
            msg: '删除'
        };
    } else if (+type === 4) {
        const name = ctx.query.teacher;
        const data = await arrange.getInf(name);
        ctx.body = {
            success: true,
            data
        };
    }
    next();
};