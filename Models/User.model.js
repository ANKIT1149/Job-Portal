import mongoose from "mongoose";
import validator from "validator";
// import isEmail from "validator/lib/isEmail";

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "Name Required"]
    },

    lastName: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: [true, "Email Required"],
        unique: true,
        validate: validator.isEmail,
    },

    password: {
        type: String,
        require: [true, "Password Required"]
    },

    location: {
        default: "India",
        type: 'String'
    }
}, {timestamps: true}) 

const User = mongoose.model("User", UserSchema);

export default User