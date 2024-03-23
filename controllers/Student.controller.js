const StudentService = require("../services/Student.services")
class StudentController {

    static async getAll(req, res) {

        try {

            const { query } = req

            const response = await StudentService.getAll({ query })

            return res.status(200).json(response)

        } catch (error) {

        }

    }

    static async getById(req, res) {

        try {

            const { id } = req.params

            const response = await StudentService.getById({ id })

            return res.status(200).json(response)
            
        } catch (error) {

        }


    }

    async deleteStudent() {

    }


}

module.exports = StudentController