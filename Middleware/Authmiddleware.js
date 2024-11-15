import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
    const authheaders = req.headers.authorization;
    if (!authheaders || !authheaders.startsWith("Bearer")) return next("Invalid Token");

    const token = authheaders.spilt("")[1]
    try {
        const payload = JWT.verify(token, process.env.Secret_Key);
        req.user = { userId: payload.userId };
        next();
    } catch (error) {
        next(error)
    }
}