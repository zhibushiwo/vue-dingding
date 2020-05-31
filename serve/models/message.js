const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    to: {
        type: String
    },
    createAt: {
        type: Date,
        default: new Date()
    },
    type: {
        type: Date,
        enum: ['text', 'image', 'code', 'invite', 'system'],
    },
    msg: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model("Message", MessageSchema)