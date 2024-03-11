const db = require("../config/db")
const { Model } = require('sequelize');

class StudentByCourse extends Model { }

StudentByCourse.init({}, {
    sequelize: db,
    modelName: 'student_by_course',
    timestamps : false,
    freezeTableName : true,
    underscored : true
});


module.exports = StudentByCourse