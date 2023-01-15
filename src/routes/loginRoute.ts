import { Router } from 'express';
import loginController from '../controllers/longinController';

const loginRoute = Router();

loginRoute.post('/', loginController.authLogin);

export default loginRoute;