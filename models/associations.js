const Course = require("./Course")
const Comment = require("./Comment")
const Note = require("./Note")
const Payment = require("./Payment")
const Student = require("./Student")
const User = require("./User")
const StudentByCourse = require("./StudentByCourse")

// Create associations in a separate file due to circular references between models
Course.belongsToMany(Student, { through: "student_by_course" })

Comment.belongsTo(Student)
Comment.belongsTo(User)

Note.belongsTo(Student)

Payment.belongsTo(Student)

Student.hasMany(Comment)
Student.hasMany(Note)
Student.hasMany(Payment)
Student.belongsToMany(Course, { through: "student_by_course" })


User.hasMany(Comment)

module.exports = { Course, Comment, Note, Payment, Student, StudentByCourse, User }
