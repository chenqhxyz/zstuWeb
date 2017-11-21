const equip = require('../model/equip.js');
module.exports = async (ctx, next) => {
    const equipment = await equip.getEquip();
    console.log(equipment);
    ctx.body = {
        success: true,
        data: equipment
    };
    next();
}