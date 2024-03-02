const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

class Student extends Model { }

Student.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    phone: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    document: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    instagram: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    facebook: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    email: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }


}, {
    sequelize,
    modelName: 'Student'
});

// TODO --> add relations with other models

module.exports = Student
