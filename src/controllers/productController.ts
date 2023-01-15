import { Request, Response } from 'express';
import productService from '../services/productService';

const productController = {
  async addProduct(req: Request, res: Response) {
    const productInfo = await productService.validateBodyProduct(req.body);
    const newProduct = await productService.addProduct(productInfo);
    res.status(201).json(newProduct);
  },
  async getAll(_req: Request, res: Response) {
    const allProducts = await productService.getAll();
    return res.json(allProducts);
  },
};

export default productController;