const {Schema, Model, trusted} = require("mongoose")

const TeamSchema = new Schema(
    {
        TeamName : {type: String, required: true},
        TeamCode : {type: String, required: true},
        Users : [{type: ObjectId, ref: "User"}] 
    }
);

module.exports = Model("Team", TeamSchema)