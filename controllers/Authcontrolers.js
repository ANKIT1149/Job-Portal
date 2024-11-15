// import { token } from "morgan";
import User from "../Models/User.model.js";
import bcryptjs from "bcryptjs";

export const AuthController = async (req, res, next) => {
  try {
    const { firstName, email, password, location } = req.body;

    if (!firstName || !email || !password || !location) {
      return res.status(400).send({
        sucess: false,
        message: "Insufficient Detail Please provide necessary Detail",
      });
    }

    const exisitingUser = await User.findOne({ email });

    if (exisitingUser)
      return res
        .status(200)
        .send({ success: false, message: "Email Already Registered" });

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const user = await User.create({
      firstName,
      email,
      password: hashedPassword,
      location,
    });

    const token = user.CreateJWT();

    res.status(200).send({
      success: true,
      message: "Account Registered Successfully",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};

export const Logincontroller = async (req, res, next) => {
  try {
    const { email, password} = req.body;

    if (!email || !password) return next("Please provide all detail to login");

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next("Invalid Credential");

    const isMatch = await user.comparePassword(password);

    // console.log(validatepassword);

    if (!isMatch) return next("Invalid Password");

    // if (location === "America") return next("Sorry in your country it is banned");
    user.password = undefined;
    const token = user.CreateJWT();

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user,
      token,
    });
  } catch (error) {
    next(error);
  }
};
