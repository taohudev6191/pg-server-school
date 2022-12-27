const mongoose = require("mongoose")
//const stdreq = require("../models/std")

const testdataSchema=mongoose.Schema({
    std:[{ 
        id: String,
        gender: String,
        fname: String,
        age: String,
        classroom: String,
    }]
},{timestamps:true})

module.exports = mongoose.model("testdata",testdataSchema)
