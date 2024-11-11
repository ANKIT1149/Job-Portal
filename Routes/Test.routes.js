import express from "express";
import { TestControllers } from "../controllers/TestControllers.js";

// Rest Object

const testRouter = express.Router();

testRouter.post("/test-post", TestControllers);

export default testRouter;