const mongoose = require("mongoose")
const stdreq = require("std")

const testdataSchema=mongoose.Schema({
    std:{
        type:Array,
    }
},{timestamps:true})

module.exports = mongoose.model("testdata",testdataSchema)
