// Import 
import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import testRouter from "./Routes/Test.routes.js";
import cors from "cors";
import morgan from 'morgan';
import Authrouter from "./Routes/Auth.routes.js";

// Config dotenv & database
dotenv.config();
connectDB();

// app rest declare
const app = express();

// app middleware
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));

// app function
app.use("/api/v1/test", testRouter);
app.use("/api/v1/auth", Authrouter);

// app port declare
app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`)
})