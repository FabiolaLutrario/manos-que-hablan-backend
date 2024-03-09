const Student = require("../models/Student");

class StudentService {
  static async createStudent(userData) {
    const { name, address, phone, document, instagram, facebook, email } =
      userData;
    return Student.create({
      name,
      address,
      phone,
      document,
      instagram,
      facebook,
      email,
    }).catch((error) => {
      console.error("Error when trying to register student:", error);
      return res.status(500).send("Internal Server Error");
    });
  }

  async updateStudent() {}

  async deleteStudent() {}
}

module.exports = StudentService;
