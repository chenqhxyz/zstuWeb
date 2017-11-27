const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Passage = sequelize.define('passage', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.STRING(2000)
    },
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
});
const passage = Passage.sync({ force: false });
exports.getPassage = function() {
    return Passage.findAll();
};
exports.addPassage = function(title, content) {
    return Passage.create({
        title,
        content
    });
};