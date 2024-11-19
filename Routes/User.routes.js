import express from 'express';
import userAuth from '../Middleware/Authmiddleware.js';
import { Usercontroller } from '../controllers/Usercontroller.js';

const UserRouter = express.Router();

UserRouter.put("/update", userAuth, Usercontroller);

export default UserRouter;