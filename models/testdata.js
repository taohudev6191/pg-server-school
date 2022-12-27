const mongoose = require("mongoose")
const std = require("../models/std")

const testdataSchema=mongoose.Schema({
    std:{
        type:Array,
    }
},{timestamps:true})

module.exports = mongoose.model("testdata",testdataSchema)
