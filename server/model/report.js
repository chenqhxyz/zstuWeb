const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Report = sequelize.define('report', {
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
    student: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    theClass: {
        type: Sequelize.STRING,
        primaryKey: true
    }
},{
    timestamps: false
});
const report = Report.sync({ force: false });

exports.writeReport = function(name, path, url, student, theClass) {
    return Report.create({
        name,
        path,
        url,
        student,
        theClass
    });
};
exports.getReport = function(theClass) {
    return Report.findAll({
        where: {theClass}
    });
};
exports.deleteReport = function(path) {
    return Report.destroy({where: {path}});
};
exports.getAllReports = function() {
    return Report.findAll();
};
exports.getReportByName = function(name) {
    return Report.findAll({
        where: {
            student: name
        }
    })
}
