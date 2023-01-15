import Joi from 'joi';
import Jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { User } from '../interfaces/userInterface';

const SECRET = process.env.JWT_SECRET || 'secret';

const userService = {
  async validateBodyUser(body: User) {
    const schema = Joi.object<User>({
      username: Joi.string().required().min(3),
      classe: Joi.string().required().min(3),
      level: Joi.number().required().min(1),
      password: Joi.string().required().min(8),
    });
    const result = await schema.validateAsync(body);
    return result;
  },
  async addUser(userInfo: User) {
    const user = await userModel.addUser(userInfo);
    return { ...user, ...userInfo };
  },
  async registrationToken(user: User) {
    const token = Jwt.sign({ data: user }, SECRET);
    return token;
  },
};

export default userService;