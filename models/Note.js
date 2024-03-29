const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

class Note extends Model { }

Note.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label : {
        type : DataTypes.STRING,
        allowNull : false
    },
    value : {
        type : DataTypes.INTEGER,
        allowNull : false

    },
    date : {
        type : DataTypes.DATE,
        allowNull : false
    }


}, {
    sequelize,
    modelName: 'Note'
});

// TODO --> add relations with other models

module.exports = Note