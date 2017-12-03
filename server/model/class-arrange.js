const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Arrange = sequelize.define('arrange', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    theClass: {
        type: Sequelize.STRING
    },
    lesson: {
        type: Sequelize.STRING
    },
    lab: {
        type: Sequelize.STRING
    },
    time: {
        type: Sequelize.STRING
    },
    teacher: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});
const arrange = Arrange.sync({ force: false });
exports.getInf = function(name) {
    return Arrange.findAll({
        where: {
            teacher: name
        }
    });
};
exports.dropInf = function(name) {
    return Arrange.destroy({where: {name}});
};
exports.modifyInf = function(name, theClass, lesson, lab, time) {
    return Arrange.update({
        theClass,
        lesson,
        lab,
        time
    }, {
        where: {name}
    });
};
exports.addInf = function(name, theClass, lesson, lab, time, teacher) {
    return Arrange.create({
        name,
        theClass,
        lesson,
        lab,
        time,
        teacher
    })
};