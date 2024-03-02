const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

class Comment extends Model { }

Comment.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    body : {
        type: DataTypes.TEXT,
        allowNull: false
    },
    modified: {
        type : DataTypes.DATE,
        allowNull : false
    }

}, {
    sequelize,
    modelName: 'Comment'
});

// TODO --> add relations with other models

module.exports = Comment
