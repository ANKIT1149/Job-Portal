import express from "express";
import { createJobcontroller } from "../controllers/createJobcontroller.js";
import userAuth from "../Middleware/Authmiddleware.js";

const JobRouter = express.Router();

JobRouter.post("/create-job", userAuth,  createJobcontroller)

export default JobRouter;