const {Schema, Model, trusted} = require("mongoose")

const UserSchema = new Schema(
    {
        Name : {
            first: {type: String, required: true},
            last: {type: String}
        },
        UserName : {type: String, required: true},
        Password : {type: String, required: true},
        IsLeader : {type: Boolean, required: true}
    }
);

module.exports = Model("User", UserSchema)