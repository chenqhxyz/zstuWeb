const equip = require('../model/equip.js');
module.exports = async (ctx, next) => {
    const equipName = ctx.query.equipName;
    const position = ctx.query.position;
    const amount = ctx.query.amount;
    await equip.addEquip(equipName, position, amount);
    ctx.body = {
        query: ctx.query,
        success: true,
        msg: '设备录入成功！'
    };
    next();
}