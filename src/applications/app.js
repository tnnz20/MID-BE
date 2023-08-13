import express from 'express';
import { errorMiddleware } from '../middleware/error-middleware.js';
import { notFoundMiddleware } from '../middleware/404-middleware.js';
import { publicRouter } from '../routes/public-api.js';

export const app = express();

app.use(express.json());

// Public routes
app.use('/api/v2/', publicRouter);

// Not found middleware
app.use(notFoundMiddleware);
// Error middleware
app.use(errorMiddleware);
