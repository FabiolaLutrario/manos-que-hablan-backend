const { where } = require("sequelize");
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

        let includeArr = []

        if (query) {
            const { withCourses, withPayments, ...rest } = query

            if (withCourses) includeArr.push(Course)
            if (withPayments) includeArr.push(Payment)
        }

        const include = { include: includeArr }

        const student = await Student.findByPk(id, include)

        return student



    }

    static async editById({ body, id }) {

        const student = await this.getById({ id })

        student.set(body)

        const updatedStudent = await student.save()

        return updatedStudent

    }
}

module.exports = StudentRepository