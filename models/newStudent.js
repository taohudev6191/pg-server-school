const mongoose = require("mongoose")

const StudentSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    fname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    classroom:{
        type:String,
        require:true
    }
},{timestamps:false})

module.exports = mongoose.model("Student",StudentSchema)
