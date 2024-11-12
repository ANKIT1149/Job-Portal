import User from "../Models/User.model.js";


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
    


      const user = await User.create({ firstName, email, password, location });

      res
        .status(200)
        .send({
          success: true,
          message: "Account Registered Successfully",
          user,
        });
} catch (error) {
    next(error)
}
};
