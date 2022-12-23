const mongoose = require("mongoose")

const timetablesSchema=mongoose.Schema({
    timetables:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model("timetables",timetablesSchema)
