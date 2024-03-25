const { Student, Course, Payment, Note, StudentByCourse } = require("#root/app/models/index.js")
const StudentHelper = require("#root/app/helpers/Student.helper.js")
class StudentRepository {

    static async getAll({ query }) {

        let options = {}

        if (query) options = StudentHelper.processQuery({ query })

        const students = await Student.findAll(options);

        return students;

    }
    static async getById({ id, query }) {

        let options = {}

        if (query) options = StudentHelper.processQuery({ query })

        const student = await Student.findByPk(id, options)

        return student

    }

    static async editById({ body, id }) {

        const student = await this.getById({ id })

        student.set(body)

        const updatedStudent = await student.save()

        return updatedStudent

    }

    static async create({ body }) {

        const { courseIds, ...rest } = body

        let student = await Student.create(rest)

        let addedCourses = []

        if (courseIds) {
            addedCourses = await this.addCoursesToStudent({ studentId: student.dataValues.id, courseIds })
        }

        return { student, addedCourses }
    }

    static async addCoursesToStudent({ studentId, courseIds }) {

        let createdRelations = []

        for (const courseId of courseIds) {
            const relation = await StudentByCourse.create({ studentId, courseId })

            createdRelations.push(relation)
        }
        return createdRelations

    }
}

module.exports = StudentRepository