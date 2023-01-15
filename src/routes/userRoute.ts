import { Router } from 'express';
import userController from '../controllers/userController';

const userRoute = Router();

userRoute.post('/', userController.addUser);

export default userRoute;