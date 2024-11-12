import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
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
        require: [true, "Password Required"],
        minlength: [6, "PAssword should be greater than 6 character or equal to 6 character"]
    },

    location: {
        default: "India",
        type: 'String'
    }
}, { timestamps: true });

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", UserSchema);

export default User