const express=require("express")
const router = express.Router()
const {create, getAllStudents, singleStudent,remove, update, getAllClassroom, getAllSubject, test} = require("../controllers/studentController")

router.post('/createstudent',create)

router.get('/getallclassroom',getAllClassroom)
router.get('/getallsubject',getAllSubject)

router.get('/getallstudent',getAllStudents)
router.post('/getstudent',singleStudent)

router.delete('/removestudent',remove)

router.put('/updatestudent',update)

router.get('/test',test)

module.exports=router