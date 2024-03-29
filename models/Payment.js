const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

class Payment extends Model { }

Payment.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    concept : {
        type : DataTypes.ENUM,
        allowNull : false
    },
    amount : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    payday : {
        type : DataTypes.STRING,
        allowNull : false
    },
    billing : {
        type : DataTypes.STRING,
        allowNull : false
    },
    receipt : {
        type : DataTypes.STRING,
        allowNull : false
    },
    modality : {
        type : DataTypes.STRING,
        allowNull : false
    },
    invoice : {
        type : DataTypes.STRING,
        allowNull : false
    }

}, {
    sequelize,
    modelName: 'Payment'
});


// TODO --> add relations with other models

module.exports = Payment


