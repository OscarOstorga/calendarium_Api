const {Schema, model} = require("mongoose")
const mongoose = require('mongoose')

const TaskSchema = new Schema(
    {
        Name : {type: String, required: true},
        Description : {type: String},
        Date : {type: String, required: true},
        Time : {
            Start : {type: Number, required: true},
            End : {type: Number, required: true}
        },
        UserRef : {type: mongoose.ObjectId, ref: "User"}
    }
)

module.exports = model("Task", TaskSchema)