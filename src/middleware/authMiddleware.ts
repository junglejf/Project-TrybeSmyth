import { NextFunction, Response, Request } from 'express';
import Jwt from 'jsonwebtoken';
import { RequestCustom } from '../interfaces/customRequest';
import throwError from '../helpers/throwError';
import loginService from '../services/loginService'; 
import { Payload } from '../interfaces/authInterface';

const validateToken = async (request:Request, _res: Response, next:NextFunction) => {
  const req = request as RequestCustom;
  
  const token = request.headers.authorization;
  
  const secret = process.env.JWT_SECRET || 'secret';
  if (!token) throwError.unathorized('Token not found');

  try {
    const payload = Jwt.verify(token as string, secret) as Payload;
    const user = await loginService.validateUser(payload.data);
    if (!user) throwError.unathorized();
    req.user = user;
    next();
  } catch (err) {
    throwError.unathorized();
  }
};

export default validateToken;