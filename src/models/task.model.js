const {Schema, model} = require("mongoose")
const mongoose = require('mongoose')

const TaskSchema = new Schema(
    {
        Name : {type: String, required: true},
        Description : {type: String},
        Date : {
            Day : Number,
            Month : Number, 
            Year : Number,
        },
        Time : {
            Start : {type: Number, required: true},
            End : {type: Number, required: true}
        },
        UserRef : {type: mongoose.ObjectId, ref: "User"},
        TeamRef : {type: mongoose.ObjectId, ref: "Team"}
    }
)

module.exports = model("Task", TaskSchema)