import express from "express";
import { AuthController } from "../controllers/Authcontrolers.js";

const Authrouter = express.Router();

Authrouter.post("/register", AuthController)

export default Authrouter;