const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Equip = sequelize.define('equip', {
    equipName: {
        type: Sequelize.STRING, // 指定值的类型
        primaryKey: true
    },
    position: {
        type: Sequelize.STRING(20),
        primaryKey: true
    },
    amount: {
        type: Sequelize.DECIMAL
    }
}, {
    tableName: 'equips'
});
const equip = Equip.sync({ force: false });
exports.addEquip = function(equipName, position, amount) {
    return Equip.create({
        equipName,
        position,
        amount
    });
};
exports.getEquip = function() {
    return Equip.findAll();
};
exports.editEquip = function(name, oldP, num, p) {
    return Equip.update({
        position: p,
        amount: num
    }, {
        where: {
            equipName: name,
            position: oldP
        }
    });
};
