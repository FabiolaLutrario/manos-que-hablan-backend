const { Student, Course, Payment } = require("../models")
class StudentRepository {

    static async getAll({ query }) {

        const { withCourses, withPayments, ...rest } = query;

        const options = {
            where: rest,
            include: withCourses ? Course : [],
        };

        const students = await Student.findAll(options);

        return students;

    }
    static async getById({ id, query }) {

        const { withCourses, withPayments, ... rest } = query
        let includeArr = []

        if(withCourses) includeArr.push(Course)
        if(withPayments) includeArr.push(Payment)

        const include = { include : includeArr}

        const student = await Student.findByPk(id, include)

        return student

    }
    
    async deleteStudent() {

    }
}

module.exports = StudentRepository