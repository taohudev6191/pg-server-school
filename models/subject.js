const mongoose = require("mongoose")

const subjectSchema=mongoose.Schema({
    subject_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    schedule:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("Subject",subjectSchema)