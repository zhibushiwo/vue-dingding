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
module.exports = mongoose.model("Users", UserSchema)