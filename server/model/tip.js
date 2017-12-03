const Sequelize = require('sequelize');
const sequelize = require('../db/db.js');

const Tip = sequelize.define('tip', {
    content: {
        type: Sequelize.STRING(200)
    },
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});
const tip = Tip.sync({ force: false });

exports.addTip = function (content) {
    return Tip.update({
        content
    }, {
        where: {
            id: 1
        }
    });
};
exports.getTip = function() {
    return Tip.findAll();
};
