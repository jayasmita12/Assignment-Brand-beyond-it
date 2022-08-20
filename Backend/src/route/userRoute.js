const express = require("express")
const {registeruser,authuser,getuser} = require("../controller/userController")

const router = express.Router()
router.route("/register").post(registeruser)
router.route("/login").post(authuser)
router.route("/admin").get(getuser)

module.exports=router;

