const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Lab = sequelize.define('lab', {
    labName: {
        type: Sequelize.STRING, // 指定值的类型
        primaryKey: true
    },
    manager: {
        type: Sequelize.STRING
    },
    equipment: {
        type: Sequelize.STRING, // 指定值的类型
    },
    reserveTime: {
        type: Sequelize.STRING,
    }
});
const lab = Lab.sync({ force: false });
exports.getLab = function() {
    return Lab.findAll();
};
exports.addLab = function(labName, manager, equipment, reserveTime) {
    return Lab.create({
        labName,
        manager,
        equipment,
        reserveTime
    });
};
exports.editLab = function(name, manager, equip, time) {
    return Lab.update({
        manager,
        equipment: equip,
        reserveTime: time
    }, {
        where: {
            labName: name
        }
    });
};