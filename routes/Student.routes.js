const express = require("express");
const StudentRouter = express.Router();
const StudentController = require("../controllers/Student.controller")

StudentRouter.get("/", StudentController.getAll)
StudentRouter.get("/:id", StudentController.getById)


module.exports = StudentRouter


