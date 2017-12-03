const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Teacher = sequelize.define('teacher', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    classes: {
        type: Sequelize.STRING
    },
    lessons: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});
const teacher = Teacher.sync({ force: false });
exports.exist = function(name) {
    return Teacher.findOne({ where: { name } });
};
exports.addOne = function(name, classes, lessons) {
    return Teacher.create({
        name,
        classes,
        lessons
    })
};
exports.modifyOne = function(name, classes, lessons) {
    return Teacher.update({
        classes,
        lessons
    }, {
        where: {
            name
        }
    })
};