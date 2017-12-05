const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Exp = sequelize.define('exp', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true     
    },
    path: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    },
    teacher: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});
const exp = Exp.sync({ force: false });

exports.writeExp = function(name, path, url, teacher) {
    return Exp.create({
        name,
        path,
        url,
        teacher
    });
};
exports.getExps = function(teacher) {
    return Exp.findAll({
        where: {
            teacher
        }
    });
};
exports.deleteExp = function(path) {
    return Exp.destroy({where: {path}});
}
