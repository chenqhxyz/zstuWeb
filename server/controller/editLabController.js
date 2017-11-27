const lab = require('../model/lab.js');
module.exports = async(ctx, next) => {
    const name = ctx.query.name;
    const manager = ctx.query.manager;
    const time = ctx.query.time;
    const equip = ctx.query.equip;
    await lab.editLab(name, manager, equip, time);
    ctx.body = {
        success: true,
        msg: '修改成功'
    }
};