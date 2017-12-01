const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Doc = sequelize.define('doc', {
    name: {
        type: Sequelize.STRING,
        primaryKey: true     
    },
    path: {
        type: Sequelize.STRING
    }
},{
    timestamps: false
});
const doc = Doc.sync({ force: false });

exports.writeDoc = function(name, path) {
    return Doc.create({
        name,
        path
    });
};
exports.getDocs = function() {
    return Doc.findAll();
}
