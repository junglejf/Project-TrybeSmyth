import { NextFunction, Request, Response } from 'express';

const errors: Record< string, number> = {
  EmptyFieldError: 400,
  InvalidFieldError: 422, 
  UnauthorizedError: 401,
};

const formatErrorName = (error :Error) => {
  if (error.name === 'ValidationError') {
    return (error.message.includes('required') 
      ? 'EmptyFieldError' : 'InvalidFieldError');
  }
  return error.name;
};

const errorMiddleware = (error : Error, _req: Request, res: Response, _next: NextFunction) => {
  const name = formatErrorName(error); 
  const { message } = error;
  const status = errors[name];
  if (!status) return res.sendStatus(500);
  res.status(status).json({ message });
};

export default errorMiddleware;