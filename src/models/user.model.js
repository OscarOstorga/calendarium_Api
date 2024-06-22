const {Schema, model} = require("mongoose")

const UserSchema = new Schema(
    {
        Name : {
            first: {type: String, required: true},
            last: {type: String}
        },
        UserName : {type: String, required: true},
        Password : {type: String, required: true},
    }
);

module.exports = model("User", UserSchema)