const db = require("../config/db")
const {  DataTypes, Model } = require('sequelize');

class Payment extends Model { }

Payment.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    concept : {
        type : DataTypes.ENUM({values : ["Pago","Cuota"]}),   // valores de prueba, consultar valores finales
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
    sequelize : db,
    modelName: 'payment'
});


module.exports = Payment


