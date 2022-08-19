const express = require("express")
const {registeruser,authuser} = require("../controller/userController")

const router = express.Router()
router.route("/register").post(registeruser)
router.route("/login").post(authuser)

module.exports=router;