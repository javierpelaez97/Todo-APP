const express = require("express")
const {addTask,getUserTasks} = require("../controllers/tasks.controller")
const {authMiddleware} = require("../middleware/authMiddleware")
const router = express.Router()

router.post("/addTask", authMiddleware, addTask )
router.get("/userTask", getUserTasks)


module.exports = router