import { Router } from 'express';
import orderController from '../controllers/orderController';
import validateToken from '../middleware/authMiddleware';

const ordersRouter = Router();

ordersRouter.get('/', orderController.getOrders);
ordersRouter.post('/', validateToken, orderController.addOrder);

export default ordersRouter;