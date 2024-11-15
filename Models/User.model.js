import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";
// import isEmail from "validator/lib/isEmail";

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: [true, "Name Required"],
    },

    lastName: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: [true, "Email Required"],
      unique: true,
      validate: validator.isEmail,
        },
    
    password: {
      type: String,
      required: [true, "password is require"],
      minlength: [6, "Password length should be greater than 6 character"],
      select: true,
    },

    location: {
      default: "India",
      type: "String",
    },
  },
  { timestamps: true }
);

// Middleware

UserSchema.pre("save", async function () {
    const salt = await bcrypt.genSalt(10);
    this.password =  bcrypt.hash(this.password, salt)
})

// Comparepassword

UserSchema.methods.comparePassword = async function(userPassword) {
    const validatepassword = bcryptjs.compare(userPassword, this.password);
    return validatepassword
}

// Token

UserSchema.methods.CreateJWT = function () {
    return JWT.sign({ userId: this._id }, process.env.Secret_Key, { expiresIn: "1d" });
};

const User = mongoose.model("User", UserSchema);

export default User