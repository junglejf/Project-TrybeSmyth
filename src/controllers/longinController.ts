import { Request, Response } from 'express';
import loginService from '../services/loginService';

const loginController = {
  async authLogin(req: Request, res: Response) {
    const userInfo = await loginService.validateBodyLogin(req.body);
    const user = await loginService.validateUser(userInfo);
    const token = await loginService.loginToken(user);
    res.json({ token });
  },
};

export default loginController;