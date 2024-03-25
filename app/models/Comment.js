const db = require("#root/app/config/db.js")
const { DataTypes, Model } = require('sequelize');

class Comment extends Model { }

Comment.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    modified: {
        type: DataTypes.DATE,
        allowNull: false
    }

}, {
    sequelize :db,
    modelName: 'comment',
    underscored : true
});


module.exports = Comment
