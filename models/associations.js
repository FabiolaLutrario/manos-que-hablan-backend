const Attend = require("./Attend")
const Comment = require("./Comment")
const Note = require("./Note")
const Payment = require("./Payment")
const Student = require("./Student")
const User = require("./User")

// Create associations in a separate file due to circular references between models
Attend.belongsToMany(Student, { through: "students_by_course" })

Comment.belongsTo(Student)
Comment.belongsTo(User)

Note.belongsTo(Student)

Payment.belongsTo(Student)

Student.hasMany(Comment)
Student.hasMany(Note)
Student.hasMany(Payment)
Student.belongsToMany(Attend, { through: "students_by_course" })

User.hasMany(Comment)

module.exports = { Attend, Comment, Note, Payment, Student, User }
