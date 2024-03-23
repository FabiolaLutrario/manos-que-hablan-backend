const { Student, Course } = require("../models")
class StudentRepository {

    static async getAll({ query }) {

            const { withCourses, ...rest } = query;
        
            const options = {
                where: rest,
                include: withCourses ? Course : [],
            };
        
            const students = await Student.findAll(options);

            return students;
        
    }
    static async getById({id}) {

        const student = await Student.findByPk(id)

        return student

    }
    async deleteStudent() {

    }
}

module.exports = StudentRepository