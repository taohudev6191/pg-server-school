const mongoose = require("mongoose")

const timetableSchema=mongoose.Schema({
    timetable:{
        type:Array,
        required:true
    }
},{timestamps:false})

module.exports = mongoose.model("Timetable",timetableSchema)
