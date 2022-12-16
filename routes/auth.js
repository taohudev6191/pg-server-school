const express=require("express")
const router = express.Router()
const {login,loginUser,registerUser, testrestapi} = require("../controllers/authController")

router.post('/testapi',testrestapi)
router.post('/login',login)
router.post('/loginuser',loginUser)
router.post('/registeruser',registerUser)

module.exports=router