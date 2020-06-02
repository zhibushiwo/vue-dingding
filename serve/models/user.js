const mongoose = require("mongoose")
const Schema = mongoose.Schema
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    avatar:{
        type:String
    }
})

// TODO: pre validate
module.exports = mongoose.model("Users", UserSchema)