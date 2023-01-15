import Joi from 'joi';
import productModel from '../models/productModel';
import { Product } from '../interfaces/productInterface';

const productService = {
  async validateBodyProduct(body: Product) {
    const schema = Joi.object<Product>({
      name: Joi.string().required().min(3),
      amount: Joi.string().required().min(3),
    });
    const result = await schema.validateAsync(body);
    return result;
  },
  async addProduct(productInfo: Product) {
    const product = await productModel.addProduct(productInfo);   
    return { ...product, ...productInfo };
  },
  async getAll() {
    const allProducts = await productModel.getAll();
    return allProducts;
  },
};

export default productService;