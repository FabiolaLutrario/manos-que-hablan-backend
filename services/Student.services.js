const StudentRepository = require("../repositories/Student.repository")
class StudentService {

    static async getAll({ query }) {

        const students = await StudentRepository.getAll({ query })

        return students

    }

    static async getById({id,query}) {

        const student = await StudentRepository.getById({id,query})

        return student

    }

    async updateStudent() {

    }

    async deleteStudent() {

    }
}

module.exports = StudentService