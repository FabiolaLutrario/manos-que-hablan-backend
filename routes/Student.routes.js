const express = require("express");
const StudentRouter = express.Router();
const StudentController = require("../controllers/Student.controller");

// add routes
router.post("/register", StudentController.createStudent);

module.exports = StudentRouter;
