const db = require("../config/db")
const {  DataTypes, Model } = require('sequelize');

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
    sequelize: db,
    modelName: 'attend'
});


module.exports = Attend