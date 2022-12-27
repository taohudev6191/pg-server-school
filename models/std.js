const mongoose = require("mongoose")

const stdSchema=mongoose.Schema({
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
        require:true
    },
    age:{
        type:String,
        require:true
    },
    classroom:{
        type:String,
        require:true
    }
},{timestamps:true})

module.exports = mongoose.model("testdata",stdSchema)
