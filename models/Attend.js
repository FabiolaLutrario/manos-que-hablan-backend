const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const Student = require("./Student");
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

Attend.belongsToMany(Student)

module.exports = Attend