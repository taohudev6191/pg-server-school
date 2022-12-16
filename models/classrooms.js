const mongoose = require("mongoose")

const classroomSchema=mongoose.Schema({
    classroom_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("Classroom",classroomSchema)