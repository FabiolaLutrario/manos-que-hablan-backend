const express = require("express");
const router = express.Router();
 
const Course = require("./Course.routes")
const CommentRouter = require("./Comment.routes")
const NoteRouter = require("./Note.routes")
const PaymentRouter = require("./Payment.routes")
const StudentRouter = require("./Student.routes")
const UserRouter = require("./User.routes")

router.use("/courses", Course)
router.use("/comments", CommentRouter)
router.use("/notes", NoteRouter)
router.use("/payments", PaymentRouter)
router.use("/students", StudentRouter)
router.use("/users", UserRouter)


module.exports = router;