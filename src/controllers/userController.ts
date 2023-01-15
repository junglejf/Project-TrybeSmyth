import { Request, Response } from 'express';
import userService from '../services/userService';

const userController = {
  async addUser(req: Request, res: Response) {
    const userInfo = await userService.validateBodyUser(req.body);
    const user = await userService.addUser(userInfo);
    const token = await userService.registrationToken(user);
    res.status(201).json({ token });
  },

};

export default userController;