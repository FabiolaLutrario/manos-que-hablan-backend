const db = require("../config/db")
const { DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init({

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false, 
    validate : {
        isEmail : true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },


}, {
  sequelize : db, 
  modelName: 'user' ,
  underscored : true
});


module.exports = User
