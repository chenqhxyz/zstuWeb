const equip = require('../model/equip.js');
module.exports = async(ctx, next) => {
    const name = ctx.query.name;
    const oldPosition = ctx.query.oldRepository;
    const num = ctx.query.amounts;
    const position = ctx.query.repository;
    await equip.editEquip(name, oldPosition, num, position);
    ctx.body = {
        success: true,
        msg: '修改数据成功'
    };
    next();
}