const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

var User = sequelize.define('user', {
    userName: {
        type: Sequelize.STRING // 指定值的类型
    },
    // 没有指定 field，表中键名称则与对象键名相同，为 email
    account: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'users'
});
const user = User.sync({ force: false });
exports.addUser = function(userName, account, password, type) {
    // 向 user 表中插入数据
    return User.create({
        userName,
        account,
        password,
        type
    });
};

exports.findByAccount = function(account) {
    return User.findOne({ where: { account } });
};
