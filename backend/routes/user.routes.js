const express = require("express")
const router = express.Router()
const {singup,login} = require("../controllers/user.controller")

router.post("/signup",singup)
router.post("/login",login)


module.exports = router