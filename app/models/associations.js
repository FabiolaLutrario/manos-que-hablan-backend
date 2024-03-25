const Course = require("#root/app/models/Course.js")
const Comment = require("#root/app/models/Comment.js")
const Note = require("#root/app/models/Note.js")
const Payment = require("#root/app/models/Payment.js")
const Student = require("#root/app/models/Student.js")
const User = require("#root/app/models/User.js")
const StudentByCourse = require("#root/app/models/StudentByCourse.js")

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
