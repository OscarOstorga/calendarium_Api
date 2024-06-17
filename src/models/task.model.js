const {Schema, Model} = require("mongoose")

const TaskSchema = new Schema(
    {
        Name : {type: String, required: true},
        Description : {type: String},
        Date : {type: String, required: true},
        Time : {
            Start : {Type: Number, required: true},
            End : {type: Number, required: true}
        },
        UserRef : {type: ObjectId, ref: "User", required: true}
    }
)