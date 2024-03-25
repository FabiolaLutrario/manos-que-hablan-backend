const express = require("express");
const router = express.Router();
 
const Course = require("#root/app/routes/Course.routes.js")
const CommentRouter = require("#root/app/routes/Comment.routes.js")
const NoteRouter = require("#root/app/routes/Note.routes.js")
const PaymentRouter = require("#root/app/routes/Payment.routes.js")
const StudentRouter = require("#root/app/routes/Student.routes.js")
const UserRouter = require("#root/app/routes/User.routes.js")

router.use("/courses", Course)
router.use("/comments", CommentRouter)
router.use("/notes", NoteRouter)
router.use("/payments", PaymentRouter)
router.use("/students", StudentRouter)
router.use("/users", UserRouter)

module.exports = router;