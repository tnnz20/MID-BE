import express from 'express';
import { errorMiddleware } from '../middleware/error-middleware.js';
import { notFoundMiddleware } from '../middleware/404-middleware.js';
import { publicRouter } from '../routes/public-api.js';
import { userRouter } from '../routes/api.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

export const app = express();

const corsOptions = {
    origin: 'http://localhost:' + process.env.ALLOWED_CORS,
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Public routes
app.use('/api/v2/', publicRouter);
app.use('/api/v2/', userRouter);

// Not found middleware
app.use(notFoundMiddleware);
// Error middleware
app.use(errorMiddleware);
