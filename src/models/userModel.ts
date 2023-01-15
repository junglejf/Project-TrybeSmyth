import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/userInterface';

const userModel = {
  async addUser(userInfo: User) {
    const query = `
    INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)
    `;
    const { username, classe, level, password } = userInfo;
    const [user] = await connection.query<ResultSetHeader>(
      query, 
      [username, classe, level, password],
    );

    const newUser = { id: user.insertId, username };
    return newUser;
  },
  async getUser(userInfo: User) {
    const { username, password } = userInfo;
    const query = `
    SELECT 
      u.id, u.username, u.classe, u.level 
    FROM 
      Trybesmith.Users as u
    WHERE
      u.username = ? AND u.password = ? `;
    
    const user = await connection.query<ResultSetHeader>(query, [username, password]);

    return user;
  },
};

export default userModel;