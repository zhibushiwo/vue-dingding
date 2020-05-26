const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    from: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    to: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    time: {
        type: Date
    },
    msg: {
        type: String
    }
})

module.exports = mongoose.model("Message", MessageSchema)