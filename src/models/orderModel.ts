import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Orders } from '../interfaces/orderInterface';
import connection from './connection';

const orderModel = {
  async getOrders() {
    const query = `
    SELECT 
      o.id, o.userId, JSON_ARRAYAGG(p.id) as 'productsIds' 
    FROM 
      Trybesmith.Products as p , Trybesmith.Orders as o , Trybesmith.Users as u
    WHERE 
      o.userId = u.id AND o.id = p.orderId
    GROUP BY 
      o.id
    ORDER BY 
      o.userId ASC`;

    const [orders] = await connection.query<RowDataPacket[]>(query);
    return orders;
  },
  async addOrder(orderInfo: Orders) {
    const { userId } = orderInfo;
    const query = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [order] = await connection.query<ResultSetHeader>(query, [userId]);

    return order.insertId;
  },
};

export default orderModel;

// JSON_ARRAYAGG() & JSON_OBJECTAGG()
// https://stackoverflow.com/questions/39030090/mysql-array-aggregate-function-like-postgresql-array-agg