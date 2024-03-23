const StudentRepository = require("../repositories/Student.repository")
class StudentService {

    static async getAll({ query }) {

        const students = await StudentRepository.getAll({ query })

        return students

    }

    static async getById({id}) {

        const student = await StudentRepository.getById({id})

        return student

    }

    async updateStudent() {

    }

    async deleteStudent() {

    }
}

module.exports = StudentService