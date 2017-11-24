const lab = require('../model/lab.js');
module.exports = async(ctx, next) => {
    const labaName = ctx.query.name;
    const manager = ctx.query.manager;
    const equip = ctx.query.equips;
    const reserve = ctx.query.available;
    await lab.addLab(labaName, manager, equip, reserve);
    ctx.body = {
        success: true,
        msg: '实验室信息录入完成'
    };
    next();
}