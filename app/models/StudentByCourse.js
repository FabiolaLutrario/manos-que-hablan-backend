const db = require("#root/app/config/db.js")
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