const mongoose = require("mongoose")

const studentSchema=mongoose.Schema({
    student_id:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    classroom_id:{
        type:String,
        required:true
    },
    subjects:{
        subject_id:Array
    }
},{timestamps:true})

module.exports = mongoose.model("Student",studentSchema)