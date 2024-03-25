const StudentService = require("#root/app/services/Student.services.js")
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
            const { query } = req

            const response = await StudentService.getById({ id, query })

            return res.status(200).json(response)

        } catch (error) {

        }

    }

    static async editById(req, res) {

        try {
            const { body } = req
            const { id } = req.params

            const response = await StudentService.editById({ body, id })

            return res.status(200).json(response)

        } catch (error) {

        }

    }

    static async create(req, res) {
        try {
            const { body } = req
            
            const response = await StudentService.create({ body })

            return res.status(201).json(response)

        } catch (error) {

        }
    }


}

module.exports = StudentController