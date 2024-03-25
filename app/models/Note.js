const db = require("#root/app/config/db.js")
const {  DataTypes, Model } = require('sequelize');

class Note extends Model { }

Note.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    label : {
        type : DataTypes.STRING,
        allowNull : false
    },
    value : {
        type : DataTypes.INTEGER,
        allowNull : false

    },
    date : {
        type : DataTypes.DATE,
        allowNull : false
    }


}, {
    sequelize : db,
    modelName: 'note',
    underscored : true
});


module.exports = Note