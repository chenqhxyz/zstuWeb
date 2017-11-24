const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Lab = sequelize.define('lab', {
    labaName: {
        type: Sequelize.STRING, // 指定值的类型
        primaryKey: true
    },
    manager: {
        type: Sequelize.STRING(5)
    },
    equipment: {
        type: Sequelize.STRING, // 指定值的类型
    },
    reserveTime: {
        type: Sequelize.STRING,
    }
});
const lab = Lab.sync({ force: false });
exports.addLab = function(labaName, manager, equipment, reserveTime) {
    return Lab.create({
        labaName,
        manager,
        equipment,
        reserveTime
    });
};