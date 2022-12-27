//ติดต่อกับฐานข้อมูล / ดำเนินการกับฐานข้อมูล
const slugify = require("slugify")
const Students = require("../models/student")
const Subjects = require("../models/subject")
const Classrooms = require("../models/classrooms");
const Testdata = require("../models/testdata");
const { v4: uuidv4 } = require('uuid');
//บันทึกข้อมูล
exports.create=(req,res)=>{
    const {keyUnitySecret,student_id,sex,fname,lname,age,classroom_id,subjects}=req.body

    /* เช็กกรอกข้อมูลไม่ครบ
    switch(true){
        case !title:
            return res.status(400).json({error:"กรุณาป้อนชื่อบทความ"})
            break;
        case !content:
            return res.status(400).json({error:"กรุณาป้อนเนื้อหาบทความ"})
            break;
    }*/

    Students.create({student_id,sex,fname,lname,age,classroom_id,subjects},(err,std)=>{
        if(err){
            res.status(400).json({error:"ชื่อไอดีนักเรียนซ้ำกัน"})
        }
        res.json(std)
    })
}
//ดึงข้อมูลบทความทั้งหมด
exports.getAllClassroom=(req,res)=>{
    Classrooms.find({}).exec((err,cr)=>{
        if(err){
            res.status(400).json({error:"ไม่พบข้อมูล"})
        }
        res.json(cr)
    })
}
exports.getAllSubject=(req,res)=>{
    Subjects.find({}).exec((err,sj)=>{
        if(err){
            res.status(400).json({error:"ไม่พบข้อมูล"})
        }
        res.json(sj)
    })
}

exports.getAllStudents=(req,res)=>{
    Students.find({}).exec((err,stds)=>{
        if(err){
            res.status(400).json({error:"ไม่พบข้อมูล"})
        }
        res.json(stds)
    })
}
exports.getAlltestdata=(req,res)=>{
    Testdata.find({}).exec((err,nsd)=>{
        if(err){
            res.status(400).json({error:"ไม่พบข้อมูล"})
        }
        res.json(nsd)
    })
}
//ดึงบทความที่สนใจอ้างอิงตาม slug
exports.singleStudent=(req,res)=>{
    const {student_id} = req.body
    Students.findOne({student_id}).exec((err,std)=>{
        res.json(std)
    })
}

exports.remove=(req,res)=>{
    const {keyUnitySecret,student_id} = req.params
    Students.findOneAndRemove({student_id}).exec((err,std)=>{
        if(err) console.log(err)
        res.json({
            message:"ลบข้อมูลเรียบร้อย"
        })
    })
}

exports.update=(req,res)=>{
    const {keyUnitySecret,student_id} = req.params
    // ส่งข้อมูล => title , content, author
    const {sex,fname,lname,age,classroom_id,subjects}=req.body
    Students.findOneAndUpdate({student_id},{student_id,sex,fname,lname,age,classroom_id,subjects},{new:true}).exec((err,std)=>{
        if(err) console.log(err)
        res.json(std)
    })
}

exports.test=(req,res)=>{
    Classrooms.find({}).exec((err,cr)=>{
        res.json({message:"ติดต่อได้"})
    })
}
