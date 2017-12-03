const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Doc = sequelize.define('doc', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true     
    },
    path: {
        type: Sequelize.STRING
    },
    url: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});
const doc = Doc.sync({ force: false });

exports.writeDoc = function(name, path, url) {
    return Doc.create({
        name,
        path,
        url
    });
};
exports.getDocs = function() {
    return Doc.findAll();
};
exports.deleteDocs = function(path) {
    return Doc.destroy({where: {path}});
}
