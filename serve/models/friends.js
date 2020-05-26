const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FriendsSchema = new Schema({
    UserA: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    UserB: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    state: {
        type: Number,
        default: 0
    },
    create_at: {
        type: Date
    }
})

module.exports = mongoose.model("Friends", FriendsSchema)