const db = require("../config/db")
const {  DataTypes, Model } = require('sequelize');

class Course extends Model { }

Course.init({

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
        type : DataTypes.STRING,
        allowNull : false
    },
    semester : {
        type : DataTypes.STRING,
        allowNull : false
    },
    level : {
        type : DataTypes.STRING,
        allowNull : false
    }


}, {
    sequelize: db,
    modelName: 'course',
    underscored : true
});


module.exports = Course