const db = require("../config/db")
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize(db);

const Comment = require("./Comment")

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
  sequelize, 
  modelName: 'User' 
});

User.hasMany(Comment)

// TODO --> add relations with other models

module.exports = User
