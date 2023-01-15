import { ResultSetHeader } from 'mysql2';
import { Product } from '../interfaces/productInterface';
import connection from './connection';

const productsModel = {
  async addProduct(productInfo: Product) {
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const { name, amount } = productInfo;
    const [product] = await connection.query<ResultSetHeader>(query, [name, amount]);
    const newProduct = { id: product.insertId, name };
    return newProduct;
  },
  async getAll() {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [allProducts] = await connection.query(query);
    return allProducts;
  },
  async updateProduct(productId:number, orderId: number) {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?';
    const productUpdate = await connection.query<ResultSetHeader>(query, [orderId, productId]);
    return productUpdate;
  },
};

export default productsModel;