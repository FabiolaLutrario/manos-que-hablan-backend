const db = require("../config/db")
const { DataTypes, Model } = require('sequelize');

class Payment extends Model { }

const conceptValidValues = {
    MAR: "marzo",
    ABR: "abril",
    MAY: "mayo",
    JUN: "junio",
    JUL: "julio",
    AGO: "agosto",
    SEP: "septiembre",
    OCT: "octubre",
    NOV: "noviembre",
    DIC: "diciembre",
    MAT: "matricula"
}

Payment.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    concept: {
        type: DataTypes.ENUM({ values: Object.values(conceptValidValues) }),
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    payday: {
        type: DataTypes.STRING,
        allowNull: true
    },
    billing: {
        type: DataTypes.STRING,
        allowNull: true
    },
    receipt: {
        type: DataTypes.STRING,
        allowNull: true
    },
    modality: {
        type: DataTypes.STRING,
        allowNull: true
    },
    invoice: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    sequelize: db,
    modelName: 'payment',
    underscored: true,
});


module.exports = Payment


