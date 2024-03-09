const StudentService = require("../services/Student.services");

class StudentController {
  static async createStudent() {
    const { name, address, phone, document } = req.body;

    if (!name || !address || !phone || !document) {
      return res.status(400).send({ error: "All fields are required!" });
    }
    StudentService.createStudent(req.body)
      .then((student) => {
        const payload = {
          id: student.id,
          name: student.name,
          address: student.address,
          phone: student.phone,
          document: student.document,
          instagram: student.instagram,
          facebook: student.facebook,
          email: student.email,
        };
        return res.status(201).send(payload);
      })
      .catch((err) => res.status(500).send(err.message));
  }

  static async updateStudent() {}

  static async deleteStudent() {}
}

module.exports = StudentController;
