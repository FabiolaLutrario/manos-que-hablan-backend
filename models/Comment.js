const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

const Student = require("./Student")
const User = require("./User")

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
    sequelize,
    modelName: 'Comment'
});


Comment.belongsTo(Student)
Comment.belongsTo(User)

module.exports = Comment
