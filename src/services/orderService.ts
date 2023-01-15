import Joi from 'joi';
import orderModel from '../models/orderModel';
import { Orders } from '../interfaces/orderInterface';
import productModel from '../models/productModel';

const orderService = {
  async verifyOrderBody(body: Record<string, number[]>) {
    const schema = Joi.object({
      productsIds: Joi.array().required().min(1).items(Joi.number()),
    }).messages({
      'array.min': '"productsIds" must include only numbers',
    });
    const orderInfo = await schema.validateAsync(body);
    console.log('orderInfo', orderInfo);
    return orderInfo;
  },

  async getOrders() {
    const orders = await orderModel.getOrders();
    return orders as Orders[];
  },
  async addOrder(orderInfo : Orders) {
    const orderId = await orderModel.addOrder(orderInfo);
    await Promise.all(orderInfo.productsIds.map(
      async (id) => {
        const [updateStats] = await productModel.updateProduct(id, orderId);
        return updateStats.affectedRows ? 'SUCCESS' : 'FAIL';
      },
    ));
    return orderInfo;
  },
};

export default orderService;