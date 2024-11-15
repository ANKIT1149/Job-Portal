import express from "express";
import { AuthController, Logincontroller } from "../controllers/Authcontrolers.js";

const Authrouter = express.Router();

Authrouter.post("/register", AuthController);

Authrouter.post("/login", Logincontroller);

export default Authrouter;