import { Request, Response } from 'express';
import { RequestCustom } from '../interfaces/customRequest';
import orderService from '../services/orderService';

const orderController = {
  async getOrders(_req: Request, res: Response) {
    const orders = await orderService.getOrders();
    return res.json(orders);
  },
  async addOrder(req: Request, res: Response) {
    console.log('usor Addorder do Controller');
    const requ = req as RequestCustom;
    const productsIds = await orderService.verifyOrderBody(requ.body);
    const order = await orderService.addOrder({ userId: requ.user.id, ...productsIds });
    return res.status(201).json(order);
  },
};

export default orderController;