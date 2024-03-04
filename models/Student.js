const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

const Comment = require("./Comment");
const Note = require("./Note");
const Attend = require("./Attend")
const Attend = require("./Payment");
const Payment = require("./Payment");

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
        type: DataTypes.STRING,
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
        allowNull: true
    }


}, {
    sequelize,
    modelName: 'Student'
});

Student.hasMany(Comment)
Student.hasMany(Note)
Student.hasMany(Payment)
Student.belongsToMany(Attend)

// TODO --> add relations with other models

module.exports = Student
