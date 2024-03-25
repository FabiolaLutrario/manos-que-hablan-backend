const express = require("express");
const StudentRouter = express.Router();
const StudentController = require("../controllers/Student.controller")

StudentRouter.get("/", StudentController.getAll)
StudentRouter.get("/:id", StudentController.getById)

StudentRouter.put('/:id', StudentController.editById)


module.exports = StudentRouter


