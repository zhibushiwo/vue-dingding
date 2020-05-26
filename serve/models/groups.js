const mongoose = require("mongoose")
const Schema = mongoose.Schema

const GroupsSchema = new Schema({
    name: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    create_at: {
        type: Date
    }
})
module.exports = mongoose.model("Groups", GroupsSchema)