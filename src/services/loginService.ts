import Joi from 'joi';
import Jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { User } from '../interfaces/userInterface';
import throwError from '../helpers/throwError';

const SECRET = process.env.JWT_SECRET || 'secret';
const empty = {
  username: { 'string.empty': '"username" is required' },
  password: { 'string.empty': '"password" is required' }, 
};

const loginService = {

  async validateBodyLogin(body : User) {
    const schema = Joi.object({
      username: Joi.string().required().messages(empty.username),
      password: Joi.string().required().messages(empty.password),
    }); 

    const result = await schema.validateAsync(body);
    return result;
  },

  async validateUser(userInfo : User) {
    console.log('validateUser', userInfo);
    const [data] = await userModel.getUser(userInfo);
    const [user] = JSON.parse(JSON.stringify(data)); // https://www.codegrepper.com/code-examples/sql/nodejs+mysql2+convert+TextRow+to+plain+objects
    
    if (!user) throwError.invalidUser('Username or password invalid');

    return { ...user, ...userInfo }; 
  },

  async loginToken(userInfo : User) {
    const token = Jwt.sign({ data: userInfo }, SECRET);
    return token;
  },

};

export default loginService;