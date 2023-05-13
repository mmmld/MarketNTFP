import express from 'express';
const app = express();
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
dotenv.config();

import routes from './routes/routes.js';

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));