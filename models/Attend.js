const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

class Attend extends Model { }

Attend.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label : {
        type : DataTypes.STRING,
        allowNull : false
    },
    year : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    semester : {
        type : DataTypes.STRING,
        allowNull : false
    },
    level : {
        type : DataTypes.INTEGER,
        allowNull : false
    }


}, {
    sequelize,
    modelName: 'Attend'
});

    // TODO --> add relations with other models

module.exports = Attend