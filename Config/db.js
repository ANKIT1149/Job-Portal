import mongoose from "mongoose";
import colors from "colors";

const connectDB = async() => {
     try {
         const conn = await mongoose.connect(process.env.MongoDB_URL);
         console.log(`Mongo Db Connected Successfully ${mongoose.connection.host}`.bgMagenta.white)
     } catch (error) {
        console.log(`Server is throwing ${error}`)
     }
}

export default connectDB;