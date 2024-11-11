// Import 
import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";

// Config dotenv
dotenv.config();
connectDB();

// app rest declare
const app = express();

// app function
app.use((req, res) => {
     res.send("Welcome to Job Portal Provide Best Job in World")
})

// app port declare
app.listen(process.env.PORT, () => {
     console.log(`Server is running on port ${process.env.PORT}`)
})