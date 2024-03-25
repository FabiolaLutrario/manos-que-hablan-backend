const { Student, Course, Payment, Note } = require("../models")
const StudentHelper = require("../helpers/Student.helper")
class StudentRepository {

    static async getAll({ query }) {

        let options = {}

        if(query) options = StudentHelper.processQuery({ query })

        const students = await Student.findAll(options);

        return students;

    }
    static async getById({ id, query }) {

        let options = {}

        if(query) options = StudentHelper.processQuery({query})

        const student = await Student.findByPk(id, options)

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