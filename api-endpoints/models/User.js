const mongoose = require("mongoose");

const UserSkema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    profilePicture: {type: String, default: ""},
    admin: {type: Boolean, default: false}
}, 
    {timestamps: true}
);

module.exports = mongoose.model("User", UserSkema);