const mongoose = require("mongoose")

const studentSchema=mongoose.Schema({
    Student:{
        type:Array,
    }
},{timestamps:true})

module.exports = mongoose.model("Student",studentSchema)
