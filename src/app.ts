import 'express-async-errors';
import express from 'express';
import productRoute from './routes/productRoute';
import userRoute from './routes/userRoute';
import orderRoute from './routes/orderRoute';
import loginRoute from './routes/loginRoute';
import errorMiddleware from './middleware/errorMiddleware';

const app = express();

app.use(express.json());

app.use('/login', loginRoute);
app.use('/orders', orderRoute);
app.use('/products', productRoute);
app.use('/users', userRoute);
app.use(errorMiddleware);

export default app;
