const express = require("express");
const StudentRouter = express.Router();
const StudentController = require("#root/app/controllers/Student.controller.js")

StudentRouter.get("/", StudentController.getAll)
StudentRouter.get("/:id", StudentController.getById)

StudentRouter.put('/:id', StudentController.editById)

StudentRouter.post("/", StudentController.create)


module.exports = StudentRouter


