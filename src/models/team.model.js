const {Schema, model} = require("mongoose")
const mongoose = require('mongoose')

const TeamSchema = new Schema(
    {
        TeamName : {type: String, required: true},
        TeamCode : {type: String, unique: true},
        Users : [{type: Schema.Types.ObjectId}],
        Leader : {type: Schema.Types.ObjectId, required: true}
    }
);  

module.exports = model("Team", TeamSchema)