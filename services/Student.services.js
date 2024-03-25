const StudentRepository = require("../repositories/Student.repository")
class StudentService {

    static async getAll({ query }) {

        const students = await StudentRepository.getAll({ query })

        return students

    }

    static async getById({ id, query }) {

        const student = await StudentRepository.getById({ id, query })

        return student

    }

    static async editById({ body, id }) {

        console.log('hola 1')

        const student = await StudentRepository.editById({ body, id })

        return student

    }

    async deleteStudent() {

    }
}

module.exports = StudentService