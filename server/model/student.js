const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Student = sequelize.define('student', {
    account: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    theClass: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});
const student = Student.sync({ force: false });
exports.exist = function(account) {
    return Student.findOne({ where: { account } });
};
exports.addOne = function(account, name, theClass) {
    return Student.create({
        account,
        name,
        theClass    
    })
};