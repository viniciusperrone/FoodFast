import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import { errors } from 'celebrate';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import rateLimiter from './middlewares/rateLimiter';
import routes from './routes';
import AppError from '../../errors/AppError';

import '../typeorm/database';
import '@shared/container/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
app.use(rateLimiter);
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // eslint-disable-next-line no-console
  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, '192.168.1.103',() => {
  // eslint-disable-next-line no-console
  console.log('Server started on port 3333!');
});
