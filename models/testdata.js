const mongoose = require("mongoose")

const testdataSchema=mongoose.Schema({
    Student:{
        type:Array,
    }
},{timestamps:true})

module.exports = mongoose.model("testdata",testdataSchema)
