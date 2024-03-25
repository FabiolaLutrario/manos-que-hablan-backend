const db = require("#root/app/config/db.js")
const { DataTypes, Model } = require('sequelize');

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
        type: DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    document: {
        type: DataTypes.STRING,
        allowNull: true
    },
    instagram: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebook: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    }


}, {
    sequelize : db,
    modelName: 'student',
    underscored : true
});




module.exports = Student
